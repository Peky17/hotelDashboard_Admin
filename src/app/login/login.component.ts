import { Component } from '@angular/core';
import { UsersService } from "../userService/users.service";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string;
  password: string;
  tituloAlerta: string='';

  constructor(public userService: UsersService, public router: Router) {
    // Inicializamos las variables 
    this.usuario = "";
    this.password = "";
    // Verificar si ya hay un usuario logueado mediante la cookie
    if(this.userService.getToken() != ''){
      this.router.navigateByUrl('panel');
    }
   }

   login() {
    if(this.usuario != '' && this.password != ''){
      if(this.usuario != '' || this.password != ''){
        const user = {username: this.usuario, password: this.password};
          this.userService.login(user).subscribe( data => {
          // Informacion del usuario a loguear enviada
          console.log(data);
          // Verificar que solo puedan acceder administradores
          if(data.roles[0] != 'ROLE_ADMIN'){
            Swal.fire('OPERACION DENEGADA', 'No tienes permiso para acceder a este sistema', 'info');
          } else {
            // Guardar datos del usuario en una cookie
            this.userService.setToken(data.id);
            this.userService.setUsername(data.username);
            this.userService.setEmail(data.email);
            // Redireccionamos al dashboard
            this.router.navigateByUrl('panel');
          }
        },
        error => {
          console.log(error);
          Swal.fire('ACCESO DENEGADO', 'Datos erroneos o el usuario no existe', 'info');
        });
      } else {
        Swal.fire('OPERACION DENEGADA', 'Porfavor complete el formulario!', 'info');
      }
    } else {
      Swal.fire('OPERACION DENEGADA', 'Porfavor complete el formulario!', 'info');
    }
  }
}
