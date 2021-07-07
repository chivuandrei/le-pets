import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuardService } from "../login/auth/index";
import { PetGeneratorComponent } from "./pet-generator/index";
import { PetsListComponent } from "./pets-list/index";

const routes: Routes = [
	{
		path: "pet-generator",
		component: PetGeneratorComponent,
		canActivate: [AuthGuardService]
	},
	{
		path: "pets-list",
		component: PetsListComponent,
		canActivate: [AuthGuardService]
	},
	{ path: "", redirectTo: "/pets-list", pathMatch: "full" }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class PetsRoutingModule {}
