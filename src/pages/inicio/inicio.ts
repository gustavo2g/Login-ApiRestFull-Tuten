import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import {LoginPage } from '../login/login';

/**
 * Generated class for the InicioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
public DU : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthServiceProvider) {

  	  const DatosUsuario = JSON.parse(localStorage.getItem('userData'));
  	this.DU = DatosUsuario;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

backToLogin(){

  this.navCtrl.push(LoginPage);

}
logout(){
     localStorage.clear();
     setTimeout(() => this.backToLogin(), 1000);
}


}
 