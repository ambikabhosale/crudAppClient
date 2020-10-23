import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/cities';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseUrl: any = 'http://localhost:3000/cities';
  constructor(private httpClient: HttpClient) { }
   
   getCities(){
     
      return this.httpClient.get(this.baseUrl);
   }
   addCity(params:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(params);
    console.log(body)
    return this.httpClient.post(this.baseUrl, body,{'headers':headers})
  }

  deleteCity(params:any): Observable<any> {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'}  
    const body=JSON.stringify(params);
    console.log(body)
    return this.httpClient.delete(this.baseUrl + '/' + params._id,{'headers':headers})
  }
 }