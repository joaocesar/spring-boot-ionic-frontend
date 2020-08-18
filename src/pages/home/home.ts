import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import {CredenciaisDto} from "../../models/credenciais.dto";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  credenciais: CredenciaisDto = {
    email: "",
    senha: ""
  }

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login() {
    console.log(this.credenciais)
    this.navCtrl.setRoot('CategoriasPage')
  }


}
