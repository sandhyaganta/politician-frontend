import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  private getUrl='http://localhost:6000';

  constructor( private http:HttpClient) { }

  userCreate(data:any){
    console.log(data,'data1');
    
    return this.http.post('http://localhost:6010/user/create',data);
  }

  userLogin(data:any){
    return this.http.post('http://localhost:6010/user/login',data);
  }
  getUser(id:any){
    return this.http.get('http://localhost:6010/user/getById/'+id);
  }
  userupdate(data:any){
    return this.http.put('http://localhost:6010/user/updateById/'+data.id,data)
  }
  
}
