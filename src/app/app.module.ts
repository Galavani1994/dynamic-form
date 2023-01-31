import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";
import {CheckboxComponent} from "./controls/checkbox/checkbox.component";
import {TextInputComponent} from "./controls/text-input/text-input.component";
import {LabelComponent} from "./controls/label/label.component";
import {DropdownComponent} from "./controls/dropdown/dropdown.component";
import {ControlComponent} from "./control/control.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    TextInputComponent,
    CheckboxComponent,
    DropdownComponent,
    LabelComponent,
    ControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
