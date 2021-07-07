import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { PetModel } from "../models/index";
import { environment } from "../../../environments/environment";

@Injectable({
	providedIn: "root"
})
export class PetService {
	constructor(private http: HttpClient) {}

	generatePet(petDetails: PetModel): Observable<PetModel> {
		return this.http.post<PetModel>(`${environment.BASEURL}/pet`, petDetails);
	}

	findPetByStatus(status: string[]): Observable<Array<PetModel>> {
		return this.http.get<Array<PetModel>>(
			`${environment.BASEURL}/pet/findByStatus`,
			{
				params: {
					status: status
				}
			}
		);
	}
}
