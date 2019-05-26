import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL_SERVICES} from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) {
  }

  register(url: string, data) {
    return this.http.post(`${URL_SERVICES}${url}`, data);
  }

  show(url: string) {
    return this.http.get(`${URL_SERVICES}${url}`);
  }
}
