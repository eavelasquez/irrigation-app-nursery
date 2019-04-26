import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL_SERVICES} from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) {
  }

  getData(entity: string) {
    return this.http.get(`${URL_SERVICES}/${entity}`);
  }
}
