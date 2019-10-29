import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  rootPath = "http://localhost:8080/";

  constructor(private http: Http) { }

  apiPost(requestBody: any, apiURL: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    console.log('headers', headers);
    
    return this.http
      .post(this.rootPath + apiURL, requestBody, { headers: headers})
  }

  apiGet(apiURL: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');

    return this.http
      .get(this.rootPath + apiURL, { headers: headers })
  }

  apiPut(requestBody: any, apiURL: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    headers.append('Accept', 'application/json');
    return this.http
      .put(this.rootPath + apiURL, JSON.stringify(requestBody), { headers: headers })

  }

  apiDelete(apiURL: string){
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    headers.append('Accept', 'application/json');

    return this.http
      .delete(this.rootPath + apiURL, { headers: headers })
  }
}
