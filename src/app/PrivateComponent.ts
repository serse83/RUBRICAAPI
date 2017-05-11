import {Router} from '@angular/router';

import {Component} from '@angular/core';

import {LoggedInGuard}from './loggedIn.guard';

import {Ng2SmartTableModule} from 'ng2-smart-table';

import {BasicExampleDataComponent} from './rubrica/basic-example-data.component';

@Component({

  selector: 'private',

  templateUrl: "./Rubrica/privatehome.html",

  styleUrls: ['./css/login.css'],

})

export class ProtectedComponent {

}
