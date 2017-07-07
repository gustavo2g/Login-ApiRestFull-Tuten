import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {


  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }


   ApiLogin(email,password,app) {
    return new Promise((resolve, reject) => {
    //declarando Variables
  	let headers = new Headers();
    let url:string;
  	email = encodeURIComponent(email);
	//Asignando parametros 
  	url= "https://dev.tuten.cl:443/TutenREST/rest/user/"+email;
	headers.append('Password', password);
	headers.append('App',app);

    this.http.put(url,{},{headers:headers})    
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }


}
