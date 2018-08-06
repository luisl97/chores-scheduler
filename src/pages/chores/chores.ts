import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Chore} from './chore'
import {ChoresProvider} from '../../providers/chores/chores';
import {ChoresDataProvider} from '../../providers/chores-data/chores-data';
import {PeopleProvider} from '../../providers/people/people';

/**
 * Generated class for the ChoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chores',
  templateUrl: 'chores.html',
})
export class ChoresPage {
  addedChores: Array<Chore> = [];
  chores: Array<Chore> = [];
  people: Array<string> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public choresservice: ChoresProvider, public choresData: ChoresDataProvider, public alertCtrl: AlertController, public peopleservice: PeopleProvider) {
    console.log('done constructor')
  }

  ionViewWillEnter() {
    this.updateChores();
    this.people = this.peopleservice.getPeople();
  }

  goNewChore(){
    this.navCtrl.push('NewChorePage');
  }

  goChoreDetails(chore){
    this.navCtrl.push('ChoredetailsPage', { chore: chore });
  }

  addChore(chore){
    this.choresservice.addChore(chore);
    this.choosePerson(chore);
    this.addedChores = this.choresservice.getAddedChores();
    console.log(this.addedChores);
  }

  removeChore(chore){
    this.choresservice.removeChore(chore);
    this.updateChores();
  }

  updateChores(){
    this.chores = this.choresservice.getChores();
    this.addedChores = this.choresservice.getAddedChores();
  }

  choosePerson(chore){
    let alert = this.alertCtrl.create();
    alert.setTitle('Who Will Complete this Chore?');

   for(let i=0; this.people.length >i; i++){
     alert.addInput({
       type: 'radio',
      label: this.people[i],
      value: this.people[i],
      checked: false
      });
   }

   alert.addButton('Cancel');
   alert.addButton({
     text: 'Okay',
     handler: data => {
       console.log('Checkbox data:', data);
       chore.person = data;

     }
   });
   alert.present();
  }

}
