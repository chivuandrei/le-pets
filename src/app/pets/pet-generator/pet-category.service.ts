import { Injectable } from "@angular/core";

@Injectable()
export class PetCategoryService {
	petCategory = [
		{ id: 0, value: "dog" },
		{ id: 1, value: "cat" }
	];

	petStatus = [
		{ id: 0, value: "available" },
		{ id: 1, value: "pending" },
		{ id: 2, value: "sold" }
	];
}
