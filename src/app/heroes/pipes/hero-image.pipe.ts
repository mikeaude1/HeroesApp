import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'HeroImagePipe'
})
export class HeroImagePipe implements PipeTransform {

  transform(hero: Hero):string {
    if(!hero.id && hero.alt_img){
    return 'assets/no-image.jpg';
  }
  if(hero.alt_img){
    return hero.alt_img;
  }
  return `assets/heroes/${hero.id}.jpg`;
  }
}
