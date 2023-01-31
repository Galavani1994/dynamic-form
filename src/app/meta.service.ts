import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase } from './controls/control-base';
import {lastValueFrom, map, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private http: HttpClient) {}

  getMeta(): Observable<ControlBase[]> {
    return this.http.get<any>('/assets/json/meta.json');
  }

  toFormGroup(controls: ControlBase[], data: any) {
    const group: any = {};

    controls.forEach((control) => {
      if (control.controlType !== 'label') {
        group[control.key] = control.required
          ? new FormControl(data[control.key] || '', Validators.required)
          : new FormControl(data[control.key] || '');
      }
    });
    return new FormGroup(group);
  }
}
