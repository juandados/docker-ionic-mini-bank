import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListBanksPage } from './list-banks';

@NgModule({
  declarations: [
    ListBanksPage,
  ],
  imports: [
    IonicPageModule.forChild(ListBanksPage),
  ],
})
export class ListBanksPageModule {}
