import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { JwtService } from './jwt.service';
import { Config } from '../config/env.config';

@Injectable()
export class ApiService {

  apiUrl: string = Config.API + '/';

  constructor(private http: Http,
              private jwtService: JwtService) {
  }

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`, {headers: this.setHeaders(), search: params})
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${this.apiUrl}${path}`,
      JSON.stringify(body),
      {headers: this.setHeaders()}
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${this.apiUrl}${path}`,
      JSON.stringify(body),
      {headers: this.setHeaders()}
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  delete(path: string): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}${path}`,
      {headers: this.setHeaders()}
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  private setHeaders(): Headers {
    const headersConfig: any = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (this.jwtService.getToken()) {
      headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
    }
    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }
}
