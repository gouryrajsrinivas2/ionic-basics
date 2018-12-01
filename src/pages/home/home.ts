import { Component,ViewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  @ViewChild('username') username;
  @ViewChild('password') password;
  login() {

 
  	this.navCtrl.push(LoginPage);

  }
  register() {

  	this.navCtrl.push(RegistrationPage);

  }
 
  }


