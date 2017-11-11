import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  item = {};
  index = -1;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.index = this.navParams.get("index");
    var data = window.localStorage["_assignment_items"];
    if (data != undefined) {
      var items = JSON.parse(data);
      this.item = items[this.index];
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }
  save() {

    let items = window.localStorage["_assignment_items"];
    if (items == undefined) {
      items = [];
    } else {
      items = JSON.parse(items);
    }
    items[this.index] = this.item;
    window.localStorage["_assignment_items"] = JSON.stringify(items);
    this.navCtrl.pop();
  }
}
