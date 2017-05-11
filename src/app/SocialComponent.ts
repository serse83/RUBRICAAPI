/*import { Component, OnDestroy } from '@angular/core';
import { AuthService1 } from "angular2-social-login";

@Component({
  selector: 'app-social',
  template: `<h1>Angular2 Social login</h1>{{status}}
              button (click)="signIn('google')">google</button>
              <button (click)="signIn('linkedin')">linkedIn</button>
              <button (click)="signIn('facebook')">facebook</button>
              <button (click)="logout()">logout</button>
              <div *ngIf="user">
                <table>
                  <tr>
                    <td>Name:</td>
                    <td>{{user.name}}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{{user.email}}</td>
                  </tr>
                  <tr>
                    <td>UID</td>
                    <td>{{user.uid}}</td>
                  </tr>
                  <tr>
                    <td>Provider</td>
                    <td>{{user.provider}}</td>
                  </tr>
                  <tr>
                    <td>Image</td>
                    <td>{{user.image}}</td>
                  </tr>
                </table>
              </div>
              `
})

export class SocialComponent implements OnDestroy {
  public user;
  sub: any;
  constructor(public _auth: AuthService1){ }
  
  signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
        console.log(data);this.user=data;}
    )
  }

  logout(){
    this._auth.logout().subscribe(
      (data)=>{console.log(data);this.user=null;}
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
*/