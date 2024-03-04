import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  jwttoken():any{
    const header={
      headers:new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    };
    return header;
  }


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
    console.log(id,'id');
    
    return this.http.get('http://localhost:6010/user/getById/'+id,this.jwttoken());
  }
  userupdate(data:any){
    return this.http.put('http://localhost:6010/user/updateById/'+data.id,data,this.jwttoken());
  }
  getallusers(){
    return this.http.get('http://localhost:6010/user/get/users',this.jwttoken());

  }
  userdelete(id:any){
    return this.http.delete('http://localhost:6010/user/deleteById/'+id,this.jwttoken())
  }
  getallpost(){
    return this.http.get('http://localhost:6010/post/get/posts',this.jwttoken())
  }
  userpost(data:any){
    return this.http.post("http://localhost:6010/userpost/comment",data,this.jwttoken())
  }
  userlike(data:any){
    return this.http.post("http://localhost:6010/userlike/like",data,this.jwttoken())

  }
  getlike(){
    return this.http.get("http://localhost:6010/userlike/getlike",this.jwttoken())
  }
  likeupdate(data:any){
    return this.http.put("http://localhost:6010/userlike/updateById/"+data.id,data,this.jwttoken())
  }
  usercomplients(data:any){
    return this.http.post("http://localhost:6010/complients/creatcomplients",data)
  }
  getcomplients(){
    return this.http.get("http://localhost:6010/complients/getcomplients",this.jwttoken())
  }
  comments(data:any){
    return this.http.post("http://localhost:6010/comments/comment",data)
  }
  getcomment(){
    return this.http.get("http://localhost:6010/comments/get/comments",this.jwttoken())
  }

  
}
