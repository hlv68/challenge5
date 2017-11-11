import { EditPage } from './../edit/edit';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];
  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    var data = window.localStorage["_assignment_items"];
    if (data != undefined) {
      this.items = JSON.parse(data);
    }
  }

  delete(index) {
    var startItems = this.items.slice(0, index);
    var endItems = this.items.slice(index + 1, this.items.length);
    this.items = startItems.concat(endItems);
    window.localStorage["_assignment_items"] = JSON.stringify(this.items);
  }

  add() {
    this.navCtrl.push(AddPage);
  }
  edit(i) {
    this.navCtrl.push(EditPage, { index: i });
  }
}
