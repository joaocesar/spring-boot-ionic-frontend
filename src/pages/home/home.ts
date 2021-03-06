import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import {CredenciaisDto} from "../../models/credenciais.dto";
import {AuthService} from "../../services/auth.service";

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

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login() {
    this.auth.authenticate(this.credenciais)
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage')
      },
      error => {});
  }

}
