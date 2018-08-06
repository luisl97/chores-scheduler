import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {PeopleProvider} from '../../providers/people/people';
import {ChoresProvider} from '../../providers/chores/chores';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  people : Array<string> = [];
  addedChores = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public peopleservice: PeopleProvider, public choresservice: ChoresProvider, public alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.loadPeople();
    this.loadChores();
    console.log(this.addedChores.length);
  }

  loadPeople(){
    this.people = this.peopleservice.getPeople();
    console.log(this.people);
  }

  loadChores(){
    this.addedChores = this.choresservice.getAddedChores();
    console.log(this.addedChores);
  }

  addPeople(){
    this.navCtrl.push('PeoplePage');
  }

  addChores(){
    this.navCtrl.push('ChoresPage');
  }

  goSchedule(){
    console.log(this.addedChores.length);
    if(this.addedChores.length == 0){
      let alert = this.alertCtrl.create({
        title: 'No Chores Added!',
        subTitle: 'Added some chores to your schedule in the Chores Page',
        buttons: ['OK']
      });
      alert.present();
    } else {
      this.navCtrl.push('SchedulePage', {chores: this.addedChores});
    }

  }

}
