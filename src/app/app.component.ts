import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {DynamicForm0fieldModel} from "./dynamic-form0field.model";
import {InformationModel} from "./information.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;
  dynamicFormFields!: DynamicForm0fieldModel[]
  infos: InformationModel[]=[];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({});
    this.dynamicFormFields = [
      {
        id: 'fullName',
        label: 'fullName',
        type: 'text',
        validators:[Validators.required]
      },
      {
        id: 'Age',
        label: 'Age',
        type: 'number',
        validators:[Validators.required]
      },
      {
        id: 'AddressType',
        label: 'AddressType',
        type: 'select',
        selectMenuOptions: {
          'Home': 'Home',
          'Work': 'Work',
          'Hom2': 'Hom2'
        }
      },
      {
        id: 'description',
        label: 'description',
        type: 'textArea',
        validators: [Validators.required]
      },
      {
        id: 'birthDate',
        label: 'birthDate',
        type: 'date',
        validators: [Validators.required]
      }
    ]
    this.dynamicFormFields.forEach(formItem => {
      const formControl = this.fb.control(formItem.value, formItem.validators)
      this.myForm.addControl(formItem.id, formControl);
    })
  }

  onSubmit() {
    const information: InformationModel = this.myForm.value;
    this.infos.push(information);
    this.myForm.reset();

  }

  delete(index:any) {
    this.infos.splice(index, 1);
  }
}
