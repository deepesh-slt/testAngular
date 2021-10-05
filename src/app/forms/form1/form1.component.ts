import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dg-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tdFormSubmit($formValue : HTMLFormElement){
    console.log($formValue);
    
  }

  log(data:any) {
    console.log(data);
  }

}
