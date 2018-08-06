import { Injectable } from '@angular/core';
import {Chore} from '../../pages/chores/chore'
import {ChoresDataProvider} from '../../providers/chores-data/chores-data';

/*
  Generated class for the ChoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChoresProvider {
  addedChores: Array<Chore> = [];
  chores: Array<Chore> = [];

  constructor(public choresData: ChoresDataProvider) {
    choresData.getChores().then(theResult => {
      this.chores = theResult;
    })
    console.log('Hello ChoresProvider Provider');
  }

  getAddedChores(){
    return this.addedChores;
  }

  getChores(){
    return this.chores;
  }

  addChore(chore){
    this.addedChores.push(chore);
  }

  removeChore(chore){
    for(let i = 0; i< this.addedChores.length; i++){
      if(chore.title == this.addedChores[i].title)
        this.addedChores.splice(i,1);
    }
  }

}
