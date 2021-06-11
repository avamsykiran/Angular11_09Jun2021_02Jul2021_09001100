import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

  logo:string;
  logos:string[];
  logoIndex:number;

  logoWidth:number;

  flag1:boolean;
  flag2:boolean;
  flag3:boolean;

  n1:number;
  n2:number;

  constructor() { 
    this.logos=["assets/imgs/namasthey1.jpg","assets/imgs/namasthey2.jpg"];
    this.logoIndex=0;
    this.logo=this.logos[this.logoIndex];
    this.logoWidth=200;

    this.flag1=false;
    this.flag2=true;
    this.flag3=true;

    this.n1=0;
    this.n2=0;
  }

  changeImage(){
    if(this.logoIndex==0) this.logoIndex=1;
    else this.logoIndex=0;
    this.logo=this.logos[this.logoIndex];
  }

  sayHello() {
    alert('Hai! Thanks for visiting us!')
  }
}
