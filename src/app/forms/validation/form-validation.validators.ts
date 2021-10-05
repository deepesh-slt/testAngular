import { AbstractControl, ValidationErrors } from "@angular/forms";

export class FormValidation {
    static nameValidation(control : AbstractControl) : ValidationErrors | null {

        if(!control.value.match('hello'))
            return {nameValidation : true};

        return null;
    };
}