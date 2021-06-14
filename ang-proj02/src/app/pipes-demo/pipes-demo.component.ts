import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent  {

  str:string;
  num:number;
  date:Date;

  constructor() { 
    this.str="This is an example string. Hello world.";
    this.num = Math.PI*100;
    this.date = new Date();
  }


}
