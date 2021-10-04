import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'dg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string = 'testAngular - Deepesh Gupta';

  constructor(private titleService : Title) {
    this.titleService.setTitle(this.title);
  }

}
