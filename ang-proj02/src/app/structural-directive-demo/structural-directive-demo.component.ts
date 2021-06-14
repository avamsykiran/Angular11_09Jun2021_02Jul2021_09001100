import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-demo',
  templateUrl: './structural-directive-demo.component.html',
  styleUrls: ['./structural-directive-demo.component.css']
})
export class StructuralDirectiveDemoComponent {

  nums : number[];

  constructor() { 
    this.nums=[-45,67,-89,90];
  }

  addNum(){
    let n = Math.trunc(Math.random()*100);
    this.nums.push(n);
  }
 
  
}
