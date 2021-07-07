import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PetModel } from "src/app/api";

@Component({
	selector: "pet-details-dialog",
	templateUrl: "./pet-details-dialog.component.html",
	styleUrls: ["./pet-details-dialog.component.scss"],
	host: { class: "petDetailsDialog" }
})
export class PetDetailsDialogComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data: PetModel) {}
}
