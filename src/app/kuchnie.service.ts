import { Injectable } from '@angular/core';
import { Model1 } from './Model/Model1';
import { Kuchnie } from './Model/KuchnieMock';

@Injectable({
  providedIn: 'root'
})
export class KuchnieService {

  constructor() { }

  getKuchnie(): Model1[] {
    return Kuchnie;
  }
}
