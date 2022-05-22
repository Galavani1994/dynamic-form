import {ValidatorFn} from "@angular/forms";

export interface DynamicForm0fieldModel {
  id: string
  type: 'text' | 'select' | 'number' | 'textArea' | 'date'
  label: string
  selectMenuOptions?: { [key: string]: string }
  value?: string
  validators?: ValidatorFn[]
}
