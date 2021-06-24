import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-domain',
  templateUrl: './login-domain.component.html',
  styleUrls: ['./login-domain.component.css']
})
export class LoginDomainComponent implements OnInit {

  email:string;
  pwd:string;

  constructor() { 
    this.email="";
    this.pwd="";
  }

  ngOnInit(): void {
  }

  login(){
    
  }

}
