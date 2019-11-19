import { Component, OnInit } from '@angular/core';
import {heroesServices, Heroe} from '../../services/heroes.services';
import { Router } from "@angular/router";
import {TruncatePipe} from '../../pipeline/string.truncate.pipe' 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService:heroesServices,
              private Router:Router) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(id){
    this.Router.navigate(['heroe',id]);
  }

}
