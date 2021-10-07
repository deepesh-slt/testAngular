import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidation } from '../validation/form-validation.validators';

@Component({
  selector: 'dg-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  rForm = new FormGroup(
    {
      name : new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        FormValidation.nameValidation,
      ]),
      email : new FormControl('',[
        Validators.required,
        Validators.email,
      ],
      [
        FormValidation.uniqueEmail,
      ]),
      message : new FormControl('',Validators.required),
    }
  );

  constructor() { }

  ngOnInit(): void {
  }

  rFormSubmit(form : HTMLFormElement) {
    console.log(form);
  }

  rfElement(element : string) : AbstractControl | null {
    return this.rForm.get(element);
  }

  // uniqueEmail(data : AbstractControl | null){
  //   let $this = this;
  //   if(data !== null) {
  //     if(this.rfElement('email')?.errors?.email === undefined){
  //       let uniqueEmailResponse;
  //       uniqueEmailResponse = FormValidation.uniqueEmail(data);
  //       if(uniqueEmailResponse instanceof Promise) {
  //         uniqueEmailResponse.then(function(value) {
  //           if(value?.uniqueEmail) {
  //             $this.rForm.setErrors({
  //               uniqueEmail : value.uniqueEmail,
  //             });
  //           }
  //         });
  //       }
  //     }
  //   }
  // }

}
