import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up";

import { AuthGuardService } from "../login/auth/index";

const routes: Routes = [
	{ path: "login", component: LoginComponent },
	{ path: "sign-up", component: SignUpComponent },
	{ path: "rest", component: SignUpComponent, canActivate: [AuthGuardService] }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class LoginRoutingModule {}
