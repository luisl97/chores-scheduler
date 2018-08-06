import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoredetailsPage } from './choredetails';

@NgModule({
  declarations: [
    ChoredetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChoredetailsPage),
  ],
})
export class ChoredetailsPageModule {}
