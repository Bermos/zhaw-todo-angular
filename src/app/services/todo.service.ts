import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { environment } from "../../environmnets/environment";
import { TodoItemListsDTO } from "../model/todoItemListsDTO";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.API_BASE_PATH;
  }
  getListIDs():Observable<TodoItemListsDTO> {
    return this.http.get(this.baseUrl + "/api/v1/listids");
  }
}
