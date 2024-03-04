import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  jwttoken():any{
    const header={
      headers:new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    };
    return header;
  }

  private getUrl='http://localhost:6000';

  constructor(private http:HttpClient) { }
  adminCreate(data:any){
    return this.http.post('http://localhost:6010/admin/create',data);

  }
  adminLogin(data:any){
    return this.http.post('http://localhost:6010/admin/login',data);
  }
  adminpost(data:any){
    return this.http.post('http://localhost:6010/post/video',data,this.jwttoken());

  }
  getallpost(){
    return this.http.get('http://localhost:6010/userpost/get/posts',this.jwttoken())
  }
  postupdate(data:any){
    return this.http.put('http://localhost:6010/post/updateById/'+data.id,data,this.jwttoken())
  }
  adminreplay(data:any){
    return this.http.post("http://localhost:6010/replay/creatreplay",data)
  }
  getreplay(u:any){
    return this.http.get("http://localhost:6010/replay/getreplay/"+u,this.jwttoken())
  }
}
