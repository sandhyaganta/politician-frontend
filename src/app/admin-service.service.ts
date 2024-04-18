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
  Token():any{
    const header={
      headers:new HttpHeaders({'Authorization':'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMDdiZjc5Ny03MzA4LTQ3OTktODVlMC03MGUzY2I0OWEwOTIiLCJ1bmlxdWVfbmFtZSI6ImdhbnRhc2FuZGh5YXZpdGFzb2Z0QGdtYWlsLmNvbSIsIm5hbWVpZCI6ImdhbnRhc2FuZGh5YXZpdGFzb2Z0QGdtYWlsLmNvbSIsImVtYWlsIjoiZ2FudGFzYW5kaHlhdml0YXNvZnRAZ21haWwuY29tIiwiYXV0aF90aW1lIjoiMDMvMDQvMjAyNCAxMDowODo1MSIsImRiX25hbWUiOiJ3YXRpX2FwcF90cmlhbCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlRSSUFMIiwiZXhwIjoxNzEwMjAxNjAwLCJpc3MiOiJDbGFyZV9BSSIsImF1ZCI6IkNsYXJlX0FJIn0.wjAKqBe4jJOjNpt9nAiyO5TBltOygWLc-gesSd8KgDM'})
    }
  }

  private getUrl='http://localhost:6000';

  constructor(private http:HttpClient) { }
  adminCreate(data:any){
    return this.http.post('http://localhost:6010/admin',data);

  }
  adminLogin(data:any){
    return this.http.post('http://localhost:6010/admin/login',data);
  }
  adminpost(data:any){
    return this.http.post('http://localhost:6010/admin/notification/',data,this.jwttoken());

  }
  getallpost(){
    return this.http.get('http://localhost:6010/admin/notification/',this.jwttoken())
  }
  postupdate(data:any){
    return this.http.put('http://localhost:6010/admin/notification/'+data.id,data,this.jwttoken())
  }
  adminreplay(data:any){
    return this.http.post("http://localhost:6010/admin/complients/",data)
  }
  getreplay(comId:any){
    return this.http.get("http://localhost:6010/user/complients/all/"+comId,this.jwttoken())
  }
  whasupmessage(data:any){
  return this.http.post("https://app-server.wati.io/api/v1/sendTemplateMessage?whatsappNumber=9701148414",data,this.Token())

  }
}
