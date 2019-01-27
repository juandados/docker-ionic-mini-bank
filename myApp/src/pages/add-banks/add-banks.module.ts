import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBanksPage } from './add-banks';

@NgModule({
  declarations: [
    AddBanksPage,
  ],
  imports: [
    IonicPageModule.forChild(AddBanksPage),
  ],
})
export class AddBanksPageModule {}
