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
    images: Array<string> = [];
  constructor(public navCtrl: NavController, public HttpClient: HttpClient) {
    this.HttpClient.get('./assets/data/app.json')
    .toPromise()
    .then((res: DataModel) => {
      this.data = res;
    })
    .catch(err => console.log(err));
    this.images = [
			'./assets/imgs/banners/slider-1.jpg',
			'./assets/imgs/banners/slider-2.jpg',
			'./assets/imgs/banners/slider-3.png'
    ];
  }

  getCategory(id) {
    console.log(id);
  }

}
