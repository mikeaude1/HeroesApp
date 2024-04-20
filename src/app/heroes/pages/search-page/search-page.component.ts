import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {
  public searchImput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero?: Hero;
  constructor(private heroService: HeroService) { }

  searchHero() {
    const value: string = this.searchImput.value || '';
    this.heroService.getSugestions(value)
      .subscribe(heroes => this.heroes = heroes);
  }


  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return
    }
    const hero: Hero = event.option.value;
    this.searchImput.setValue(hero.superhero)
    this.selectedHero = hero;
  }
}


