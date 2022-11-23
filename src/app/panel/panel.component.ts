import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { switchAll } from 'rxjs';
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
      Swal.fire('OPERACION DENEGADA', 'Porfavor complete el formulario!', 'info');
      this.userService.deleteToken();
      console.log("Ha cerrado sesion");
      this.router.navigateByUrl('login');
  }
}
