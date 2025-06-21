import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeData {

  constructor(private http: HttpClient) { }
  getData(url: string){
      return this.http.get(url);
    }
}
