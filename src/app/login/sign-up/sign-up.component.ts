import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { take } from "rxjs/operators";

import { UserModel } from "../../api/index";
import { UserService } from "../../api/index";

@Component({
	selector: "pet-sign-up",
	templateUrl: "./sign-up.component.html",
	styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
	signUpForm: FormGroup;

	constructor(
		private userService: UserService,
		private router: Router,
		private snackBar: MatSnackBar
	) {}

	ngOnInit(): void {
		this.signUpForm = new FormGroup({
			userName: new FormControl(null, Validators.required),
			userFirstName: new FormControl(null, Validators.required),
			userLastName: new FormControl(null, Validators.required),
			userEmail: new FormControl(null, Validators.email),
			userPassword: new FormControl(null, Validators.required),
			userPhone: new FormControl(null, Validators.required)
		});
	}

	signUp(): void {
		const signUpParams: UserModel = {
			id: 0,
			username: this.signUpForm.controls.userName.value,
			firstName: this.signUpForm.controls.userFirstName.value,
			lastName: this.signUpForm.controls.userLastName.value,
			email: this.signUpForm.controls.userEmail.value,
			password: this.signUpForm.controls.userPassword.value,
			phone: this.signUpForm.controls.userPhone.value,
			userStatus: 0
		};

		this.userService
			.createUser(signUpParams)
			.pipe(take(1))
			.subscribe(res => {
				if (res) {
					this.snackBar.open("Congrats. Your user has been created!!", "", {
						horizontalPosition: "left",
						verticalPosition: "top"
					});
					this.router.navigate(["/login"]);
				}
			});
	}
}
