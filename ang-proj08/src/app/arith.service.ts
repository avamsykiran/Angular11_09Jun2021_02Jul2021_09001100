import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithService {

  constructor() { }

  sum(n1:number,n2:number){
    return n1+n2;
  }

  dif(n1:number,n2:number){
    return n1-n2;
  }

  prd(n1:number,n2:number){
    return n1*n2;
  }
}
