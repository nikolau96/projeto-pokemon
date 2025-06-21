import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeData } from './poke-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [PokeData]
})
export class App implements OnInit {
  protected title = 'projeto-pokemon';
  poke: any;
  url = 'https://pokeapi.co/api/v2/pokemon';
  constructor (private service: PokeData){}
  getPoke():void{
    this.service.getData(this.url).subscribe(data=>this.poke.data);
  }
  ngOnInit(){
    this.getPoke();
  }
}
