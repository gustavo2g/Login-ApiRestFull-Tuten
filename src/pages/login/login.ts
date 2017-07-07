import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { InicioPage } from '../Inicio/Inicio';
import { App } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

})
export class LoginPage {
  responseData : any;
  userData = {"password": "","email": ""};
   myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthServiceProvider, public fb: FormBuilder,public app:App) {
	if (typeof(localStorage.getItem("userData")) == 'string') {
		this.navCtrl.push(InicioPage);
	} 

	 this.myForm = this.crearForm();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

    login(){
 
     this.authService.ApiLogin(this.userData.email,this.userData.password,'APP_WEB').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.app.getRootNav().push(InicioPage);

    }, (err) => {
      // Error log
    });

  }



  private crearForm(){
  return this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.minLength(4)],
   
  });
}


}
