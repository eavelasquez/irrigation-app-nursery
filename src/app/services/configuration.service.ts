import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) {
  }

  register(url: string, data) {
    return this.http.post(`${environment.URL_SERVICES}${url}`, data);
  }

  show(url: string) {
    return this.http.get(`${environment.URL_SERVICES}${url}`);
  }
}
