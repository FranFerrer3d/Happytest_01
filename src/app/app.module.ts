import { BannerComponent } from './banner/banner.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { usuariosService } from './services/usuarios.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegistroComponent } from './registro/registro.component';
import { PostComponent } from './post/post.component';
import { FotosComponent } from './fotos/fotos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


export const firebaseConfig = {
  apiKey: "AIzaSyCKDhjEcBg0ksfCNg84wFH_7usvWUKqRQM",
  authDomain: "happy-test-19234.firebaseapp.com",
  databaseURL: "https://happy-test-19234.firebaseio.com",
  storageBucket: "happy-test-19234.appspot.com",
  messagingSenderId: "110706352978"
};




const appRoutes:Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'main',component:MainComponent},
  {path:'registro',component:RegistroComponent},
  {path:'fotos',component:FotosComponent},
  {path:'usuarios',component:UsuariosComponent},
  {path:'post',component:PostComponent},
  

]

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MainComponent,
    RegistroComponent,
    LoginComponent,
    PostComponent,
    FotosComponent,
    UsuariosComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    
  ],
  providers: [
  usuariosService
  ],
  bootstrap: [AppComponent,BannerComponent,LoginComponent,MainComponent,RegistroComponent,PostComponent,UsuariosComponent,FotosComponent]
  
})
export class AppModule { }

