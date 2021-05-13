import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {

  @Input() pokemons: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
