import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChoresDataProvider {
     data: any = null;
     constructor(public http: Http) {}

     load() {
      if (this.data) {
        return Promise.resolve(this.data);
      }

      return new Promise(resolve => {
        this.http.get('assets/data/chores.json')
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
    }

    getChores() {
      return this.load().then(data => {
        return data;
      });
    }

    getFilteredChores(queryString) {
    return this.load().then(Chores => {
      let theFilteredChores: any = [];

      for (let chore of Chores) {
        if (chore.title.toLowerCase().indexOf(queryString.toLowerCase()) > -1) {
          theFilteredChores.push(chore);
        }
      }

      return theFilteredChores;
      });
    }


}
