import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { UserModel } from "../models/user.model";

@Injectable({
	providedIn: "root"
})
export class UserService {
	constructor(private http: HttpClient) {}

	createUser(userDetails: UserModel): Observable<UserModel> {
		return this.http.post<UserModel>(
			`${environment.BASEURL}/user/createWithList`,
			[userDetails]
		);
	}

	login(userDetails: UserModel): Observable<HttpResponse<UserModel>> {
		return this.http.get<UserModel>(`${environment.BASEURL}/user/login`, {
			params: {
				username: userDetails.username,
				password: userDetails.password
			},
			observe: "response"
		});
	}
}
