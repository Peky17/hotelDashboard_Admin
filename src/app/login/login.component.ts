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
  email: string;
  password: string;
  tituloAlerta: string='';

  constructor(public userService: UsersService, public router: Router) {
    // Inicializamos las variables 
    this.email = "";
    this.password = "";
    // Verificar si ya hay un usuario logueado mediante la cookie
    if(this.userService.getToken() != ''){
      this.router.navigateByUrl('panel');
    }
   }

   login() {
    if(this.email != '' && this.password != ''){
      if(this.email != '' || this.password != ''){
        const user = {email: this.email, password: this.password};
          this.userService.login(user).subscribe( data => {
          // Informacion del usuario a loguear enviada
          console.log(data);
          // Guardar el token en una cookie
          this.userService.setToken(data.token);
          // Redireccionamos al dashboard
          this.router.navigateByUrl('panel');
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
