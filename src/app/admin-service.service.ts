import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private getUrl='http://localhost:6000';

  constructor(private http:HttpClient) { }
  adminCreate(data:any){
    return this.http.post('http://localhost:6010/admin/create',data);

  }
  adminLogin(data:any){
    return this.http.post('http://localhost:6010/admin/login',data);
  }
}
