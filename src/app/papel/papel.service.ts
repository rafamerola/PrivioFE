import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import { Papel } from './papel';

const baseUrl = 'http://localhost:4200';

@Injectable({
  providedIn: 'root'
})
export class PapelService {

  constructor(public oktaAuth: OktaAuthService, private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  private async request(method: string, url: string, data?: any) {
    const token = await this.oktaAuth.getAccessToken();

    console.log('request ' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  // tslint:disable-next-line:typedef
  getPapels() {
    return this.request('get', `${baseUrl}/papel`);
  }

  // tslint:disable-next-line:typedef
  getPapel(id: number) {
    return this.request('get', `${baseUrl}/papel/${id}`);
  }

  // tslint:disable-next-line:typedef
  createPapel(papel: Papel) {
    console.log('createPapel ' + JSON.stringify(papel));
    return this.request('post', `${baseUrl}/papel`, papel);
  }

  // tslint:disable-next-line:typedef
  updatePapel(papel: Papel) {
    console.log('updatePapel ' + JSON.stringify(papel));
    return this.request('post', `${baseUrl}/papel/${papel.id}`, papel);
  }

  // tslint:disable-next-line:typedef
  deletePapel(id: number) {
    return this.request('delete', `${baseUrl}/papel/${id}`);
  }
}
