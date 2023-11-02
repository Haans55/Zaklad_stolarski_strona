import { Injectable } from '@angular/core';
import { Model } from './Model/Model';
import { Schody } from './Model/SchodyMocks';

@Injectable({
  providedIn: 'root'
})
export class SchodyService {

  constructor() { }

  getSchody(): Model[] {
    return Schody;
  }
}
