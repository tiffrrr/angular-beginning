import { Component, OnInit } from '@angular/core';
// 獲取資料。原本是獲取local假資料，後來改成使用service。
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


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
  heroes: Hero[];
  // 原本是拉local假資料，改成service注入
  // heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  //注入service,告訴angular這裡是 HeroService的注入點
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
    ) { }
  // 將service來的資料匯入
  getHeroes(): void {
    // 此為同步的寫法
    // this.heroes = this.heroService.getHeroes();
    // 非同步的寫法
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }


}
