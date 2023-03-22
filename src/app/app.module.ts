import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { HttpClientModule } from "@angular/common/http";
import { ApiModule } from "./openapi-gen";
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { FormsModule } from "@angular/forms";
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    TodoListsComponent,
    TodoItemsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ApiModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
