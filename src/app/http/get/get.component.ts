import { Component, OnInit } from '@angular/core';
import { ApiService, userDataType } from '../service/api.service';

@Component({
  selector: 'dg-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {
  posts : userDataType[] = [];

  constructor(private api : ApiService) { }

  ngOnInit(): void {
  this.api.getData()
    .subscribe(response => {
      this.posts = response;
    });
    
  }

  addPostSubmit(data : HTMLFormElement) {
    let sendData : userDataType = {
      fullname : data.fullname,
      username : data.username,
      email : data.email,
      password : data.password,
    }; 
    
    this.api.postData(sendData)
      .subscribe(response => {
        console.log(response);
        this.posts.splice(0, 0, response);
      });
  }

}
