import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userFormGroup: FormGroup;

  idFC:FormControl;
  fnmFC:FormControl;
  lnmFC:FormControl;
  eidFC:FormControl;
  pwdFC:FormControl;
  roleFC:FormControl;

  errMsg?:string;

  constructor(private userService:UsersService,private router:Router) { 

    this.idFC=new FormControl(0,[Validators.required,Validators.min(1)])
    this.fnmFC=new FormControl('',[Validators.required,Validators.minLength(5)])
    this.lnmFC=new FormControl('',[Validators.required,Validators.minLength(5)])
    this.eidFC=new FormControl('',[Validators.required,Validators.email])
    this.pwdFC=new FormControl('',[Validators.required,Validators.minLength(3)])
    this.roleFC=new FormControl('USER',[Validators.required])

    this.userFormGroup = new FormGroup({
      id:this.idFC,
      firstName:this.fnmFC,
      lastName:this.lnmFC,
      emailId:this.eidFC,
      password:this.pwdFC,
      role:this.roleFC
    });
  }

  ngOnInit(): void {
  }

  handleFormSubmit(){
    this.userService.add(this.userFormGroup.value).subscribe(
      data => this.router.navigateByUrl("/users/list"),
      err => this.errMsg=err
    );
  }
}
