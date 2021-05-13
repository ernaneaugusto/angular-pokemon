import { Component, OnInit } from '@angular/core';
import { PokemonsService, API } from './services/pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public pokemons: Array<any>;

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit() {
    this.pokemonsService.getPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons.results.map((item) => {
        let currentId = item.url.split('/')[6];

        return {
          name: item.name,
          url: item.url,
          imageUrl: `${API.imageUrl}${currentId}.png`
        };
      });

    });
  }
}
