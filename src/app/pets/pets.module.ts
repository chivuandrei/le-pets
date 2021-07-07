import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { NgxMatFileInputModule } from "@angular-material-components/file-input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from "@angular/material/dialog";

import { PetsRoutingModule } from "./pets-routing.module";
import {
	PetCategoryService,
	PetGeneratorComponent
} from "./pet-generator/index";
import { PetsListComponent } from "./pets-list/index";
import { PetComponent } from "./pet/index";
import { PetDetailsDialogComponent } from "./pet-details-dialog/index";

@NgModule({
	declarations: [
		PetGeneratorComponent,
		PetsListComponent,
		PetComponent,
		PetDetailsDialogComponent
	],
	imports: [
		CommonModule,
		MatFormFieldModule,
		FlexModule,
		MatButtonModule,
		MatDialogModule,
		MatInputModule,
		MatSelectModule,
		MatProgressSpinnerModule,
		NgxMatFileInputModule, // is not used - only for testing
		ReactiveFormsModule,
		PetsRoutingModule
	],
	providers: [PetCategoryService],
	exports: [PetGeneratorComponent, PetsListComponent]
})
export class PetsModule {}
