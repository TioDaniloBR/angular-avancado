import { Component, Input } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';
=======
import { ValidarCamposService } from '../validar-campos.service';
import { FormGroup, AbstractControl } from '@angular/forms';
>>>>>>> novaBranch

@Component({
  selector: 'dio-input-textarea',
  templateUrl: './input-textarea.component.html',
<<<<<<< HEAD
  styleUrls: ['./input-textarea.component.css']
})
export class InputTextareaComponent {

=======
  styleUrls: ['./input-textarea.component.scss']
})
export class InputTextareaComponent {
  
>>>>>>> novaBranch
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
