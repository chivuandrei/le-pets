import { Component, Input, OnInit } from "@angular/core";
import { PetModel, PetStatus } from "../../api/index";

@Component({
	selector: "pet",
	templateUrl: "./pet.component.html",
	styleUrls: ["./pet.component.scss"],
	host: { class: "pet" }
})
export class PetComponent implements OnInit {
	@Input() pet: PetModel;

	ngOnInit(): void {}

	getStatusColor(status: string) {
		switch (status) {
			case PetStatus.Pending: {
				return "violet";
			}
			case PetStatus.Sold: {
				return "red";
			}
			default: {
				return "green";
			}
		}
	}
}
