import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsComponent } from './forms/forms.component';
import { Form1Component } from './forms/form1/form1.component';
import { Form2Component } from './forms/form2/form2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpComponent } from './http/http.component';
import { GetComponent } from './http/get/get.component';
import { PostComponent } from './http/post/post.component';
import { PutComponent } from './http/put/put.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    Form1Component,
    Form2Component,
    HttpComponent,
    GetComponent,
    PostComponent,
    PutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
