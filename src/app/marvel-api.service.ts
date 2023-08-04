import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})


export class MarvelApiService {
  private publickey = 'a71e2ebcb697b5cfb2bd46f393a513e1';
  private privatekey = 'ef4af9b05dcde5a8427fbc18d4d432a6';
  private apiUrl = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.publickey}&hash=${this.privatekey}`;


  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}