import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponent } from "./my-first/my-first.component";
import { TodoListsComponent } from "./todo-lists/todo-lists.component";

const routes: Routes = [
  {
    path: 'home',
    component: TodoListsComponent
  },
  {
    path: 'myfirst',
    component: MyFirstComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
