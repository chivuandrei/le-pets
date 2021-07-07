import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexModule } from "@angular/flex-layout";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";

import { SignUpComponent } from "./sign-up/index";
import { LoginComponent } from "./login/index";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
	declarations: [SignUpComponent, LoginComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatInputModule,
		MatButtonModule,
		FlexModule,
		LoginRoutingModule
	],
	exports: [SignUpComponent, LoginComponent]
})
export class LoginModule {}
