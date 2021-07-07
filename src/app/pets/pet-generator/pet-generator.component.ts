import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { take } from "rxjs/operators";

import { PetModel } from "../../api/index";
import { PetService } from "../../api/index";
import { PetCategoryService } from "./pet-category.service";

@Component({
	selector: "pet-generator",
	templateUrl: "./pet-generator.component.html",
	styleUrls: ["./pet-generator.component.scss"],
	host: { class: "petGenerator" }
})
export class PetGeneratorComponent implements OnInit {
	petForm: FormGroup;
	petImgFile: string;

	constructor(
		public petCategoryService: PetCategoryService,
		private petService: PetService,
		private snackBar: MatSnackBar,
		private router: Router
	) {}

	ngOnInit(): void {
		this.petForm = new FormGroup({
			petCategory: new FormControl(null),
			petName: new FormControl(null, Validators.required),
			petImageUrl: new FormControl(null, Validators.required),
			petStatus: new FormControl(null, Validators.required)
		});
	}

	// This can be used to upload the actual image
	// onImageChange(e): void {
	// 	const reader = new FileReader();

	// 	if (e.target.files && e.target.files.length) {
	// 		const [file] = e?.target?.files;
	// 		reader.readAsDataURL(file);
	// 		reader.onload = () => {
	// 			this.petImgFile = reader.result as string;
	// 			this.petForm.controls.petImageUrl.patchValue({
	// 				imgSrc: this.petImgFile
	// 			});
	// 		};
	// 	}
	// }

	generatePet(): void {
		const petGeneratorParams: PetModel = {
			id: 0,
			category: {
				id: 0,
				name: this.petForm.controls.petCategory.value
			},
			name: this.petForm.controls.petName.value,
			photoUrls: [this.petForm.controls.petImageUrl.value],
			status: this.petForm.controls.petStatus.value
		};

		this.petService
			.generatePet(petGeneratorParams)
			.pipe(take(1))
			.subscribe(res => {
				if (res) {
					this.snackBar.open(
						"Congrats. Your pet has been added to our list",
						"",
						{
							horizontalPosition: "left",
							verticalPosition: "top"
						}
					);
					this.router.navigate(["/pets-list"]);
				}
			});
	}
}
