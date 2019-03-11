import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private angularFireAuth:AngularFireAuth,private router: Router) { 
    

  }

  ngOnInit() {
  }

  public gitLogin(){
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
    .then((result)=>this.router.navigateByUrl('/main'))
  }
  public Login(){
    this.router.navigateByUrl('/main')
  }
}
