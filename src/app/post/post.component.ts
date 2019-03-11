import { Component, OnInit } from '@angular/core';
import { usuariosService } from './../services/usuarios.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  comentario:any = {};
  mensajeAlerta="";
  
  
    constructor(private userService:usuariosService) { }
  
    ngOnInit() {
    }
    registrar(){
      this.comentario.id = Date.now();
      console.log(this.comentario);
      var result = this.userService.saveComent(this.comentario);
      if(result=='error'){
        this.mensajeAlerta="Error en la identificacion";
      }
    }
  
}
