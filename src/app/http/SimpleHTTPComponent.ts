import { Component } from '@angular/core';
import {Http,  Response,
  RequestOptions,
  Headers} from '@angular/http';
  import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import{AuthService} from 'app/AuthService';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})
@Injectable()
export class SimpleHTTPComponent {
  
  url: string;
  headers: Headers;
  options: RequestOptions;
  data:Object;
  response: Response;
  message: string;


   constructor(private http: Http,
   public authService: AuthService
   ) {


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
  

 //private extractData(res: Response): any {

   // let response = res.json();

   // return response || { };
  }

/*

    login(username: string, password: string): Observable<any> {
    username='meroni'; password='alyt2016';
    let credentials = 'username=' + username + '&password=' + password;
   return this.http.post(this.url, JSON.stringify(credentials )).map(this.extractData)       
    
    
      }

      */

login(username: string, password: string){
let params = 'username=' + username + '&password='+ password ; 
  this.http.post('https://test.alyt.com:8443//ServerLYT/LYT_Server/WS_API/WS_login.php', params, { headers: this.headers })
 .subscribe( 
    data => console.log('Received:' + data),
    (err) => console.log('error'));
    () => console.log('Call Complete');
if(() => console.log('Call Complete')
){
        localStorage.setItem(username, username);
        return true
}


      // {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
      // let user = this.response.json();
        //        if (username && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes

}
 
   // }
  //}
      logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('username');
        return false
    }


}

