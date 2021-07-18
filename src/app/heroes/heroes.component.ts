import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[] = [];
  // hero:Hero = {
  //   id : 1,
  //   name : 'Windstorm',
  //   age: 20,
  // }
  // selectedHero?: Hero;
  // onSelect(hero : Hero):void{
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  // }
  constructor(private heroService : HeroService, private messageService: MessageService ) { }

  ngOnInit(): void {
    this.getHeroesFromLocalComponent();
  }

  // getHeroesFromLocalComponent123() : void {
  //   // this.heroes = HEROES;
  //   // this.heroes = this.heroService.getHeroesFromService();
  //   this.heroService.getHeroesFromService()
  //    .subscribe((xs) => {
  //      console.log('my hero: ', xs);
  //      this.heroes = xs;
  //    });
  //  }

getHeroesFromLocalComponent() : void {
 this.heroService.getHeroesFromService()
  .subscribe(heroes => this.heroes = heroes);
}
add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
}
delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero.id).subscribe();
}
}
