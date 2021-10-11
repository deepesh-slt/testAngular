import { Component, OnInit } from '@angular/core';
import { ApiService, PostType } from '../service/api.service';

@Component({
  selector: 'dg-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {
  posts : PostType[] = [];

  constructor(private api : ApiService) { }

  ngOnInit(): void {
  this.api.getData()
    .subscribe(response => {
      this.posts = response;
    });
    
  }

}
