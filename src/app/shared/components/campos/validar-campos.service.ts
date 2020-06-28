import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { AbstractControl } from '@angular/forms';
=======
import { AbstractControl, ControlContainer } from '@angular/forms';
>>>>>>> novaBranch

@Injectable({
  providedIn: 'root'
})
export class ValidarCamposService {

  constructor() { }

<<<<<<< HEAD
  hasErrorValidar(control: AbstractControl, errorName: string): boolean {
    if ((control.dirty || control.touched) && this.hasError(control, errorName)) {
      return true;
    }
    return false;
  }

  hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }

  lengthValidar(control: AbstractControl, errorName: string): number {
=======
  hasErrorValidar(control: AbstractControl, errorName: string): boolean{
     if((control.dirty || control.touched) && this.hasError(control, errorName)){
      return true;
     }else{
       return false;
     }
  }

  hasError(control: AbstractControl, errorName: string): boolean{
    return control.hasError(errorName);
  }

  lengthValidar(control: AbstractControl, errorName: string): number{
>>>>>>> novaBranch
    const error = control.errors[errorName];
    return error.requiredLength || error.min || error.max || 0;
  }
}
