import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddBanksPage} from '../add-banks/add-banks';
import { ListBanksPage } from '../list-banks/list-banks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addBanksPage: any = AddBanksPage;
  listBanksPage: any = ListBanksPage;

  constructor(public navCtrl: NavController) {

  }

}
