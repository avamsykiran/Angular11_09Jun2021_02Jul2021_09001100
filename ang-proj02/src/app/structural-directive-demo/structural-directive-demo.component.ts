import { Component } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-structural-directive-demo',
  templateUrl: './structural-directive-demo.component.html',
  styleUrls: ['./structural-directive-demo.component.css']
})
export class StructuralDirectiveDemoComponent {

  nums : number[];
  //ms:MathService;

  constructor(public ms:MathService) { 
    this.nums=[-45,67,-89,90];
    //this.ms=ms;
  }

  addNum(){
    let n = Math.trunc(Math.random()*100);
    this.nums.push(n);
  }
 
  
}
