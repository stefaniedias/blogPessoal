import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userlogin } from '../model/Userlogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userlogin: Userlogin = new Userlogin()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
  }

  entrar() {
    this.authService.logar(this.userlogin).subscribe((resp: Userlogin) => {
      this.userlogin = resp
      localStorage.setItem('token', this.userlogin.token)
      this.router.navigate(["/feed"])
    })
  }

}
