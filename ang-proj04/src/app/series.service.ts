import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor() { }

  generateSeries(lb:number,ub:number) : Observable<number> {
    return new Observable(observer => {

      if(lb>ub){
        observer.error("Invalid Boundaries! Series can ot be generated");
        return;
      }

      let n = lb;
      let handler = setInterval(()=>{
          observer.next(n);
          n++;
          if(n>ub){
            clearInterval(handler);
            observer.complete();
          }
      },1000);
    });

  }
  
}
