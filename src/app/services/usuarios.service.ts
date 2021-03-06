import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';


@Injectable()
export class usuariosService{
  usuario:any = {};
    user=[
        {
          id:1,
          activo:true,
        nombre:"Juan",
        foto:"https://assets4.domestika.org/project-items/001/228/844/sesion-estudio-barcelona-10-big.jpg?1425034585"
        },
        {
          id:2,
          activo:true,
          nombre:"Susana",
          foto:"data:image/jpeg;base64,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"
        },
        {
          id:3,
          activo:true,
          nombre:"Andres",
          foto:"https://www.lainformacion.com/files/article_default_content/uploads/2018/03/20/5ab12ab49dd60.jpeg"
        },
        {
            id:4,
          nombre:"Paco",
          activo:true,
          foto:"https://www.sintetia.com/wp-content/uploads/2012/05/Foto-perfil.jpg"},
          {
            id:5,
            activo:true,
            nombre:"Ernesto",
            foto:"http://www.christiangarces.org/wp-content/uploads/2017/11/perfil-profesional.jpg"
          },
          {
            id:6,
            activo:true,
            nombre:"Lucia",
            foto:"https://image.freepik.com/foto-gratis/perfil-mujer-bonita-gafas-sol-rojas_1304-5212.jpg"
          }
      ]


      constructor(private afDB:AngularFireDatabase){

      }
      public getUsuarios(){
          return this.user;
      }

      public getActiveUser(){
            var arrayUsuarios = null;   
          for(let userActive of this.user){
             arrayUsuarios.push(userActive);
          }
          return arrayUsuarios;
      }

      public save(usuario){
        if(this.usuario.pass1==this.usuario.pass2){
          
          this.afDB.database.ref('usuarios/'+usuario.id).set(usuario);
        }
        else{
          return "error"
        }

        
    
      }
      public saveComent(usuario){
        if(this.usuario.pass1==this.usuario.pass2){
          
          this.afDB.database.ref('coments/'+usuario.id).set(usuario);
        }
        else{
          return "error"
        }

        
    
      }
}