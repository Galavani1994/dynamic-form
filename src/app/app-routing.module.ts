import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DynamicFormFieldComponent} from "./dynamic-form-field/dynamic-form-field.component";

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
