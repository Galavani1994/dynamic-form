import {Component, Input, OnInit} from '@angular/core';
import {DynamicForm0fieldModel} from "../dynamic-form0field.model";
import {FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.css']
})
export class DynamicFormFieldComponent implements OnInit {

  @Input() formItem!: DynamicForm0fieldModel;
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = this.rootFormGroup.control;
  }

  ngOnInit(): void {
  }

}
