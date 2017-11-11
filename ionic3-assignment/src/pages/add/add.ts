import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  item: any = {
    id: "",
    className: "",
    doneDate: "",
    completed: false
  }
  constructor( public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  save() {

    let items = window.localStorage["_assignment_items"];
    if (items == undefined) {
      items = [];
    } else {
      items = JSON.parse(items);
    }
    this.item.id = new Date().getTime();
    items.push(this.item)
    window.localStorage["_assignment_items"] = JSON.stringify(items);
    this.navCtrl.pop();
  }

}
