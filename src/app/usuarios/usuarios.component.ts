import { Component, OnInit } from '@angular/core';
import { usuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios = null;
  constructor(private usuariosService:usuariosService) { 

    this.usuarios = usuariosService.getUsuarios();
    //this.usuariosActivos =usuariosService.getActiveUser();

  }

  ngOnInit() {
  }

}
