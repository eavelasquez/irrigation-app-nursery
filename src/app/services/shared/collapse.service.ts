import { Injectable } from '@angular/core';
import { Collapse } from '../../interfaces/collapse';

@Injectable({
  providedIn: 'root'
})
export class CollapseService {

  constructor() { }

  public collapse: Collapse[] = [
    { title: 'Bomba', icon: 'bomb', url: '/bomb' },
    { title: 'Tanque', icon: 'tint', url: '/tank' },
    { title: 'Sensor', icon: 'weight', url: '/sensor' },
    { title: 'Planta', icon: 'spa', url: '/plant' },
    { title: 'Electroválvula', icon: 'water', url: '/solenoid' },
    { title: 'Batería', icon: 'car-battery', url: '/battery' }
  ];
}
