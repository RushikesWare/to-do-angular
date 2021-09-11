import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserservicesService {
  url='http://localhost:3000/user';

  constructor(private http:HttpClient) { }
  
  getUser(){
      return this.http.get(this.url);
  }
  postData(data:any){
    return this.http.post(this.url, data);
  }

  deleteUser(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

}
