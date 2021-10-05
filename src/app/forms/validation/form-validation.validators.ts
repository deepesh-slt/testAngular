import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class FormValidation {
    static nameValidation(control : AbstractControl) : ValidationErrors | null {

        if(!control.value.match('hello'))
            return {nameValidation : true};

        return null;
    };

    static uniqueEmail(control : AbstractControl) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                if(control.value === 'deepesh@gmail.com')
                    resolve({ uniqueEmail : true});
                else 
                    resolve(null);
            },2000);
        });
    }
}