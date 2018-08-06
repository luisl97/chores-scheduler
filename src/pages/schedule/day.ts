import { Component } from '@angular/core';
import {Chore} from '../chores/chore';

export class Day{
  name: string;
  chores: Array<Chore>;
  energyLevel: number;
}
