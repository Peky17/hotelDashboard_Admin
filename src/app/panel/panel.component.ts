import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../userService/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

   constructor(public userService: UsersService, public router: Router){
    // Verificar si hay un usuario en sesion 
    if(this.userService.getToken() != ""){
    } else {
      console.log("Tramposito");
      this.router.navigateByUrl('login');
    }
  }

  // Metodo para cerrar sesion
  logout(){
      Swal.fire({
        title: '¿Desea salir de la aplicacion?',
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Salir',
        denyButtonText: 'No salir',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Hasta pronto!', '', 'success');
          // Cerramos sesion en la api rest
          this.userService.logout(this.userService.getToken);
          // Eliminamos los datos de las cookies
          this.userService.deleteToken();
          this.userService.deleteUsername();
          this.userService.deleteEmail();
          console.log("Ha cerrado sesion");
          this.router.navigateByUrl('login');
        } else if (result.isDenied) {
          Swal.fire('Sesion no cerrada', '', 'info');
        }
      })
  }
}
