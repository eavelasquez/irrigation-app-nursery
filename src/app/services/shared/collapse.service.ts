import { Injectable } from '@angular/core';
import { Collapse } from '../../interfaces/collapse';

@Injectable({
  providedIn: 'root'
})
export class CollapseService {

  constructor() { }

  public collapse: Collapse[] = [
    { title: 'Bomba', icon: 'bomb', url: '/configuration/bomba' },
    { title: 'Tanque', icon: 'tint', url: '/configuration/tanque' },
    { title: 'Sensor', icon: 'weight', url: '/configuration/sensor' },
    { title: 'Planta', icon: 'spa', url: '/configuration/planta' },
    { title: 'Electroválvula', icon: 'water', url: '/configuration/electrovalvula' },
    { title: 'Batería', icon: 'car-battery', url: '/configuration/bateria' }
  ];
}
