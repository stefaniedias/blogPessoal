import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http2SecureServer } from 'http2';
import { User } from '../model/User';
import { Userlogin } from '../model/Userlogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) { }
  
  logar(userlogin: Userlogin){
    return this.http.post('http://localhost:8080/usuarios/logar', Userlogin)
  }

  cadastrar(user: User) {
    return this.http.post('http://localhost:8080/usuarios/cadastrar', User)
  }
}

//vamos usar o httclient. injetar a dependencias