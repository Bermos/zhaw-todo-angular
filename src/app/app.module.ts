import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { HttpClientModule } from "@angular/common/http";
import { ApiModule } from "./openapi-gen";
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TooltipDirective } from './shared/directive/tooltip.directive';
import { TempConverterPipe } from './shared/pipe/temp-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    TodoListsComponent,
    TodoItemsComponent,
    SignupComponent,
    LoginComponent,
    TooltipDirective,
    TempConverterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ApiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
