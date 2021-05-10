import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


// 每個component都要有的固定東西
//selector— 元件的選擇器（CSS 元素選擇器）
//templateUrl— 元件範本檔案的位置。
//styleUrls— 元件「私有」 CSS 位置。
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

// 一定要export，才能在其它地方用
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
