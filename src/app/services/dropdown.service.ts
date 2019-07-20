import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) {
  }

  getData(entity: string) {
    return this.http.get(`${environment.URL_SERVICES}/${entity}`);
  }
}
