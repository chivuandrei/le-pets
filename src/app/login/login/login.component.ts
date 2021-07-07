import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { UserModel, UserService } from "../../api/index";

@Component({
	selector: "pet-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;

	constructor(private userService: UserService, private router: Router) {}

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			userName: new FormControl(null, Validators.required),
			userPassword: new FormControl(null, Validators.required)
		});
	}

	login(): void {
		const signUpParams: UserModel = {
			username: this.loginForm.controls.userName.value,
			password: this.loginForm.controls.userPassword.value
		};
		this.userService.login(signUpParams).subscribe(res => {
			if (res) {
				localStorage.setItem("userIsLoggedIn", res.ok.toString());
				this.router.navigate(["/pets-list"]);
			}
		});
	}
}
