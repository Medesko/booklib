import { Component } from '@angular/core';
import {IonicPage, NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DataModel } from './data.model';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    data: DataModel;
  constructor(public navCtrl: NavController, public HttpClient: HttpClient) {
    this.HttpClient.get('./assets/data/app.json')
    .toPromise()
    .then((res: DataModel) => {
      this.data = res;
    })
    .catch(err => console.log(err));
  }

}
