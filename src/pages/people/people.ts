import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';
import {PeopleProvider} from '../../providers/people/people';

/**
 * Generated class for the PeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  people: Array<string> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public peopleservice: PeopleProvider) {

  }

  ionViewWillEnter() {
    this.updatePeople();
  }

  addPerson(){
    let newPerson: string = prompt("New Person");
    this.peopleservice.addPerson(newPerson);
    this.updatePeople();
  }

  removePerson(person) {
    this.peopleservice.removePerson(person);
    this.updatePeople();
  }

  updatePeople(){
    this.people = this.peopleservice.getPeople();
  }

}
