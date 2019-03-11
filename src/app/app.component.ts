import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HappyTest';
  mensajeList = Array('Hola ',' Bienvenido a HAPPY TEST');
  nombreUsuario='';
  mensaje='';
  puedoMostrar=false;
  idIdioma = 0;

  constructor() {

  }

    Enviar(){
        if(!this.puedoMostrar){
          this.puedoMostrar=true;
          this.mensaje=this.mensajeList[0]+this.nombreUsuario+this.mensajeList[1];
        }

    }

}
