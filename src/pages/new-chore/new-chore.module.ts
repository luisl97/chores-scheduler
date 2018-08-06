import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewChorePage } from './new-chore';

@NgModule({
  declarations: [
    NewChorePage,
  ],
  imports: [
    IonicPageModule.forChild(NewChorePage),
  ],
})
export class NewChorePageModule {}
