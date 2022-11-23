import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})

export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {
  }

  // Metodo de logueo
  login(user: Object): Observable<any> {
    /* Peticion mediante el metodo post para enviar los datos del usuario a loguear 
    (Se le envia el obejto con los datos contenidos)*/
     return this.http.post("http://localhost:8090/api/auth/signin", user); 
  }
  // Metodo para cerrar sesion
  logout(user: Object): Observable<any> {
    /* Peticion mediante el metodo post para enviar los datos del usuario a loguear 
    (Se le envia el obejto con los datos contenidos)*/
     return this.http.post("http://localhost:8090/api/auth/signout", user); 
  }
  // Metodo de registro de usuarios
  register(user: Object): Observable<any> {
    return this.http.post("http://localhost:8090/api/auth/signup", user);
  }
  // Metodos para el manejo de cookies del usuario
  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
  deleteToken(){
    this.cookies.delete("token");
  }

  // Username del usuario en sesion
  setUsername(nombre: string){
    this.cookies.set("username", nombre);
  }
   getUsername() {
    return this.cookies.get("username");
  }
  deleteUsername(){
    this.cookies.delete("username");
  }

  // Email del usuario en sesion
    setEmail(email: string){
    this.cookies.set("email", email);
  }
   getEmail() {
    return this.cookies.get("email");
  }
  deleteEmail(){
    this.cookies.delete("email");
  }
}