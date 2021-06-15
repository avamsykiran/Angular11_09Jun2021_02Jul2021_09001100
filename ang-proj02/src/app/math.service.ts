import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  isPrime(n:number):boolean{
    let count:number=2;

    for(let i=2;i<=n/2;i++){
      if(n%i==0){
        count++;
        break;
      }
    }

    return count==2;
  }
}
