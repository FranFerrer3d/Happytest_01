import { usuariosService } from './../services/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

usuario:any = {};
mensajeAlerta="";


  constructor(private userService:usuariosService) { }

  ngOnInit() {
  }
  registrar(){
    this.usuario.id = Date.now();
    console.log(this.usuario);
    var result = this.userService.save(this.usuario);
    if(result=='error'){
      this.mensajeAlerta="Error en la identificacion";
    }
  }

}
