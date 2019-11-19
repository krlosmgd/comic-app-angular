import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import {heroesServices, Heroe} from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.sass']
})
export class HeroeComponent implements OnInit {


  heroe:Heroe;

  constructor( private activeRoute:ActivatedRoute,
    private _heroesServices:heroesServices) { }

  ngOnInit() {
    this.activeRoute.params.subscribe( params => {
      this.heroe = this.getHero(params['id']);
      console.log(this.heroe);
    })
  }

  getHero(i){
    return  this._heroesServices.getHero(i);
  }



}
