import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Day} from './day'
import {Chore} from '../chores/chore';
import {Week} from './week'

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  chores: Array<Chore> = [];
  schedule: Array<Day> =[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chores = navParams.data.chores;
    console.log(this.chores);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

  ionViewWillEnter(){
    this.loadWeek();
    this.createSchedule();
    console.log(this.schedule);
  }

  loadWeek(){
    this.schedule.push({name:"monday", chores:[], energyLevel : 0});
    this.schedule.push({name:"tuesday", chores:[], energyLevel : 0});
    this.schedule.push({name:"wednesday", chores:[], energyLevel : 0});
    this.schedule.push({name:"thursday", chores:[], energyLevel : 0});
    this.schedule.push({name:"friday", chores:[], energyLevel : 0});
    this.schedule.push({name:"saturday", chores:[], energyLevel : 0});
    this.schedule.push({name:"sunday", chores:[], energyLevel : 0});
  }


  createSchedule(){
    for(let i = 0; this.chores.length > i; i++){
      let chore = this.chores[i];
      if(chore.repetitions == 7){         //add chores to all days of the week
        this.schedule[0].chores.push(chore);
        this.schedule[0].energyLevel += chore.energyLevel;
        this.schedule[1].chores.push(chore);
        this.schedule[1].energyLevel += chore.energyLevel;
        this.schedule[2].chores.push(chore);
        this.schedule[2].energyLevel += chore.energyLevel;
        this.schedule[3].chores.push(chore);
        this.schedule[3].energyLevel += chore.energyLevel;
        this.schedule[4].chores.push(chore);
        this.schedule[4].energyLevel += chore.energyLevel;
        this.schedule[5].chores.push(chore);
        this.schedule[5].energyLevel += chore.energyLevel;
        this.schedule[6].chores.push(chore);
        this.schedule[6].energyLevel += chore.energyLevel;
        console.log('scheduled chore ' + i);
      } else if(chore.repetitions == 6){  //add chores to all days except [5]
        this.schedule[0].chores.push(chore);
        this.schedule[0].energyLevel += chore.energyLevel;
        this.schedule[1].chores.push(chore);
        this.schedule[1].energyLevel += chore.energyLevel;
        this.schedule[2].chores.push(chore);
        this.schedule[2].energyLevel += chore.energyLevel;
        this.schedule[3].chores.push(chore);
        this.schedule[3].energyLevel += chore.energyLevel;
        this.schedule[4].chores.push(chore);
        this.schedule[4].energyLevel += chore.energyLevel;
        this.schedule[6].chores.push(chore);
        this.schedule[6].energyLevel += chore.energyLevel;
        console.log('scheduled chore ' + i);
      } else if(chore.repetitions == 5){  //[4] and [5] free
        this.schedule[0].chores.push(chore);
        this.schedule[0].energyLevel += chore.energyLevel;
        this.schedule[1].chores.push(chore);
        this.schedule[1].energyLevel += chore.energyLevel;
        this.schedule[2].chores.push(chore);
        this.schedule[2].energyLevel += chore.energyLevel;
        this.schedule[3].chores.push(chore);
        this.schedule[3].energyLevel += chore.energyLevel;
        this.schedule[6].chores.push(chore);
        this.schedule[6].energyLevel += chore.energyLevel;
        console.log('scheduled chore ' + i);
      } else if(chore.repetitions == 4){  //day in between
        this.schedule[0].chores.push(chore);
        this.schedule[0].energyLevel += chore.energyLevel;
        this.schedule[2].chores.push(chore);
        this.schedule[2].energyLevel += chore.energyLevel;
        this.schedule[4].chores.push(chore);
        this.schedule[4].energyLevel += chore.energyLevel;
        this.schedule[6].chores.push(chore);
        this.schedule[6].energyLevel += chore.energyLevel;
        console.log('scheduled chore ' + i);
      } else if(chore.repetitions == 3){ //two days in between
        this.schedule[0].chores.push(chore);
        this.schedule[0].energyLevel += chore.energyLevel;
        this.schedule[3].chores.push(chore);
        this.schedule[3].energyLevel += chore.energyLevel;
        this.schedule[6].chores.push(chore);
        this.schedule[6].energyLevel += chore.energyLevel;
        console.log('scheduled chore ' + i);
      } else if(chore.repetitions == 2){
        if(i == 0){
          this.schedule[2].chores.push(chore);
          this.schedule[2].energyLevel += chore.energyLevel;
          this.schedule[6].chores.push(chore);
          this.schedule[6].energyLevel += chore.energyLevel;
        }else{
        this.twoReps(chore);  // out of three pairs of days (W/Sun,M/Th,Tu/F) add chore to the pair with least energy levels
        }
        console.log('scheduled chore ' + i);
      } else{
        if(i==0){
          this.schedule[0].chores.push(chore);
          this.schedule[0].energyLevel += chore.energyLevel;
        }else if(i==1){
          this.schedule[1].chores.push(chore);
          this.schedule[1].energyLevel += chore.energyLevel;
        }else{
        this.oneRep(chore);                  // add the chore to the day with the least energy level
        }
        console.log('scheduled chore ' + i);
      }
    }
  }

  twoReps(chore){
    let option1energy = this.schedule[2].energyLevel + this.schedule[6].energyLevel;
    let option2energy = this.schedule[0].energyLevel + this.schedule[3].energyLevel;
    let option3energy = this.schedule[1].energyLevel + this.schedule[4].energyLevel;

    if(option1energy <= option2energy){
      if(option1energy <= option3energy){
        this.schedule[2].chores.push(chore);
        this.schedule[2].energyLevel += chore.energyLevel;
        this.schedule[6].chores.push(chore);
        this.schedule[6].energyLevel += chore.energyLevel;
      }else{
        this.schedule[1].chores.push(chore);
        this.schedule[1].energyLevel += chore.energyLevel;
        this.schedule[4].chores.push(chore);
        this.schedule[4].energyLevel += chore.energyLevel;
      }
    } else {
      if(option2energy <= option3energy){
      this.schedule[0].chores.push(chore);
      this.schedule[0].energyLevel += chore.energyLevel;
      this.schedule[3].chores.push(chore);
      this.schedule[3].energyLevel += chore.energyLevel;
      } else {
      this.schedule[1].chores.push(chore);
      this.schedule[1].energyLevel += chore.energyLevel;
      this.schedule[4].chores.push(chore);
      this.schedule[4].energyLevel += chore.energyLevel;
      }
    }
  }

  oneRep(chore){
    console.log('enteredOneRep');
    let leastBusy: number = 0;
    for(let i = 1; 7 > i; i++){
      if(this.schedule[i].energyLevel < this.schedule[leastBusy].energyLevel)
        leastBusy = i;
    }
    this.schedule[leastBusy].chores.push(chore);
    this.schedule[leastBusy].energyLevel += chore.energyLevel;
    console.log('enteredOneRep');
  }

}
