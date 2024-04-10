import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  comId: any;
  constructor() { }
  setComplient(id: any){
    this.comId = id;
  }
  getComplient(){
    return this.comId;
  }
}
