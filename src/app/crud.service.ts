import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http : HttpClient) { 
   
  }
  SharingData = new BehaviorSubject("");  

  user_insert(data:any){
    return this.http.post<any>("https://addbox.in/api/user_insert.php", data) 
  }
  get_data(){
    return this.http.get<any>('https://addbox.in/api/user_view.php')
  }
  user_update(data:any){
    return this.http.put<any>("https://addbox.in/api/user_update.php", data) 
  }
  user_delete(data:any){
    return this.http.post<any>("https://addbox.in/api/user_delete.php", data) 
  }
}
