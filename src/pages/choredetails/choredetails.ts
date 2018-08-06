import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {PeopleProvider} from '../../providers/people/people';
import {Chore} from '../chores/chore'


/**
 * Generated class for the ChoredetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choredetails',
  templateUrl: 'choredetails.html',
})
export class ChoredetailsPage {

  chore: Chore;
  people: Array<string> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleservice: PeopleProvider,  public alertCtrl: AlertController) {
    this.chore = navParams.data.chore;
    console.log(this.chore.title);
  }

  ionViewWillEnter() {
    this.people = this.peopleservice.getPeople();
  }

  changePerson(){
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
       this.chore.person = data;

     }
   });
   alert.present();
  }

  changeEnergylvl(){
    let alert = this.alertCtrl.create();
    alert.setTitle('How much energy does the chore take to complete?');


     alert.addInput({
       type: 'radio',
      label: '1',
      value: '1',
      checked: false
      });

      alert.addInput({
        type: 'radio',
       label: '2',
       value: '2',
       checked: false
       });

       alert.addInput({
         type: 'radio',
        label: '3',
        value: '3',
        checked: false
        });

        alert.addInput({
          type: 'radio',
         label: '4',
         value: '4',
         checked: false
         });

         alert.addInput({
           type: 'radio',
          label: '5',
          value: '5',
          checked: false
          });

   alert.addButton('Cancel');
   alert.addButton({
     text: 'Okay',
     handler: data => {
       console.log('Checkbox data:', data);
       this.chore.energyLevel = +data;

     }
   });
   alert.present();
  }

  changeRepetitions(){
    let alert = this.alertCtrl.create();
    alert.setTitle('How many days per week?');


    alert.addInput({
      type: 'radio',
     label: '1',
     value: '1',
     checked: false
     });

     alert.addInput({
       type: 'radio',
      label: '2',
      value: '2',
      checked: false
      });

      alert.addInput({
        type: 'radio',
       label: '3',
       value: '3',
       checked: false
       });

       alert.addInput({
         type: 'radio',
        label: '4',
        value: '4',
        checked: false
        });

        alert.addInput({
          type: 'radio',
         label: '5',
         value: '5',
         checked: false
         });

         alert.addInput({
           type: 'radio',
          label: '6',
          value: '6',
          checked: false
          });

          alert.addInput({
            type: 'radio',
           label: '7',
           value: '7',
           checked: false
           });


    alert.addButton('Cancel');
    alert.addButton({
     text: 'Okay',
     handler: data => {
       console.log('Checkbox data:', data);
       this.chore.repetitions = +data;

     }
    });
    alert.present();
  }

}
