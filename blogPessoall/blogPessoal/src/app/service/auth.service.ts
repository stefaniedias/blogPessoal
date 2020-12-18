import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Userlogin } from '../model/Userlogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) { }
  
  logar(userlogin: Userlogin){
    return this.http.post('http://localhost:8080/usuarios/logar', userlogin)
  }

  cadastrar(user: User) {
    return this.http.post('http://localhost:8080/usuarios/cadastrar', user)
  }

btnSair(){
  let ok = false
  let token = environment.token

  if (token != '') {
    ok = true
  }

  return ok
}

btnLogin() {
  let ok = false
  let token = environment.token

  if (token == '') {
    ok = true
  }

  return ok
}

}

//vamos usar o httclient. injetar a dependencias