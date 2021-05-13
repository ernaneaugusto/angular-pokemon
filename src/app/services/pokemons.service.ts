import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const API = {
  baseUrl: 'https://pokeapi.co/api/v2',
  pokemon: 'pokemon',
  imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
  pokemons2: 'pokemons'
}

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  public getPokemons(): Observable<any> {
    return this.http.get(`${API.baseUrl}/${API.pokemon}`);
  }
  public getPokemonsInfos(name:string): Observable<any> {
    return this.http.get(`${API.baseUrl}/${API.pokemon}/${name}`);
  }
}
