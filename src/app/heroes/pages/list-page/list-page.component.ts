import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {
  public heroes:Hero[]=[];

  constructor(private heroService:HeroesService){}

  ngOnInit(): void {
    this.heroService.getHeroes()
    .subscribe(heroes=> this.heroes=heroes);
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
