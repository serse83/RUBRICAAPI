
import {AuthService} from "./AuthService"

import {Component} from "@angular/core"

import {Router} from '@angular/router';

//for the managment of the API request and for the communication with the server

import {Http,  
  Response,
  RequestOptions,
  Headers} from '@angular/http';

//Observables handle multiple values over time

import { Observable } from 'rxjs/Observable';

// reactive programming library for JavaScript 
import 'rxjs/Rx';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';


@Component({

   selector:'login',

   templateUrl: './login.html',

   styleUrls: ['app.component.css']
})

export class LoginComponent {

//url of the api
  url: string;

//Headers to be attached to a Request.

  headers: Headers;

  options: RequestOptions;

//data to sent
  data:Object;

  response: Response;

  message: string;


   constructor(private http: Http,

   public authService: AuthService
   ) 
   
   {

        this.message = '';

        this.url = 'https://test.alyt.com:8443//ServerLYT/LYT_Server/WS_API/WS_login.php';

        this.headers = new Headers();

        this.headers.append('Content-Type','application/x-www-form-urlencoded');

        this.options = new RequestOptions({headers: this.headers});

        let _build = (<any> http)._backend._browserXHR.build;

        (<any> http)._backend._browserXHR.build = () => {

          let _xhr =  _build();

          _xhr.withCredentials = true;

          return _xhr;
  };
  
  }

mes: string

login(username: string, password: string)

  {

      let params = 'username=' + username + '&password='+ password ; 

      this.http.post('https://test.alyt.com:8443//ServerLYT/LYT_Server/WS_API/WS_login.php', params, { headers: this.headers })

// additively subscribe to a specific channel, manage information.
 
      .subscribe( 

//sent data to the api e put the username into thee localstore

          data => console.log('Received:' + data, localStorage.setItem('username', username)),
//message response in case of bad connection
          (err) => console.log(this.mes = 'errore1'),

 );

                }
//logout            
  logout() 
      {
        localStorage.removeItem('username');
        return false
    }


}