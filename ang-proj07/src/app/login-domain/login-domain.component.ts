import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login-domain',
  templateUrl: './login-domain.component.html',
  styleUrls: ['./login-domain.component.css']
})
export class LoginDomainComponent implements OnInit {

  email: string;
  pwd: string;
  errMsg?: string;

  constructor(private usersService: UsersService, private router: Router) {
    this.email = "";
    this.pwd = "";
  }

  ngOnInit(): void {
  }

  login() {
    this.usersService.login(this.email, this.pwd).subscribe(
      user => {
        if (user && user.role === 'ADMIN')
          this.router.navigateByUrl("/users")
        else if (user && user.role !== 'ADMIN')
          this.router.navigateByUrl("/txns")
        else
          this.errMsg="User Not Found";
      },
      err => this.errMsg = err
    );
  }

}
