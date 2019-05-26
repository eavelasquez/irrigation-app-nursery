import { Injectable } from '@angular/core';
import { Collapse } from '../../interfaces/collapse';

@Injectable({
  providedIn: 'root'
})
export class CollapseService {

  constructor() { }

  public collapse: Collapse[] = [
    { title: 'Humedad', icon: 'tint', url: '/configuration/humedad' },
  ];
}
