import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3000/cities';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    
  constructor(private httpClient: HttpClient) { }
   
   getCities(){
     let baseUrl = 'http://localhost:3000/cities';
      return this.httpClient.get(baseUrl);
   }
 }

