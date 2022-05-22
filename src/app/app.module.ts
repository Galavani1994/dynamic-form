import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DynamicFormFieldComponent} from "./dynamic-form-field/dynamic-form-field.component";

@NgModule({
  declarations: [
    AppComponent, DynamicFormFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [DynamicFormFieldComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
