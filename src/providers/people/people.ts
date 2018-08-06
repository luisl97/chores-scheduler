
import { Injectable } from '@angular/core';

/*
  Generated class for the PeopleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleProvider {
  people: Array<string> = [];

  constructor() {
    console.log('Hello PeopleProvider Provider');
  }

  getPeople(){
    return this.people;
  }

  addPerson(newPerson){
    if(newPerson != ""){
        this.people.push(newPerson)
    }
  }

  removePerson(person){
    for(let i = 0; i< this.people.length; i++){
      if(person == this.people[i])
        this.people.splice(i,1);
    }
  }

}
