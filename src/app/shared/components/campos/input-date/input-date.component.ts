import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'dio-input-date',
  templateUrl: './input-date.component.html',
<<<<<<< HEAD
  styleUrls: ['./input-date.component.css']
=======
  styleUrls: ['./input-date.component.scss']
>>>>>>> novaBranch
})
export class InputDateComponent {

  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
<<<<<<< HEAD

=======
>>>>>>> novaBranch
}
