import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
	MatSnackBar,
	MAT_SNACK_BAR_DEFAULT_OPTIONS
} from "@angular/material/snack-bar";
import { OverlayModule } from "@angular/cdk/overlay";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from "./login/index";
import { PetsModule } from "./pets/index";

@NgModule({
	declarations: [AppComponent],
	imports: [
		CommonModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		LoginModule,
		PetsModule,
		OverlayModule,
		HttpClientModule,
		BrowserModule
	],
	providers: [
		MatSnackBar,
		{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
