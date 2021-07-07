import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";

import { PetModel, PetService, PetStatus } from "../../api/index";
import { PetDetailsDialogComponent } from "../pet-details-dialog/index";
import { PetCategoryService } from "../pet-generator/index";

@Component({
	selector: "pets-list",
	templateUrl: "./pets-list.component.html",
	styleUrls: ["./pets-list.component.scss"],
	host: { class: "petsList" }
})
export class PetsListComponent implements OnInit {
	petsList$: Observable<PetModel[]>;
	PetStatus = PetStatus;

	constructor(
		public petCategoryService: PetCategoryService,
		public dialog: MatDialog,
		private petService: PetService
	) {}

	ngOnInit(): void {
		this.findPetByStatus$(PetStatus.Available);
	}

	findPetByStatus$(status: string): void {
		this.petsList$ = this.petService.findPetByStatus([status]);
	}

	showPetDetails(petDetails: PetModel) {
		this.dialog.open(PetDetailsDialogComponent, {
			data: petDetails
		});
	}
}
