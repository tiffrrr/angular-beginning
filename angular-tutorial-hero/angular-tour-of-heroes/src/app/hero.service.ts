// 把資料訪問交給service。元件不應該直接獲取或儲存資料， 應聚焦於展示資料。
// 如果你想要測試元件或修改資料來源，就不得不修改元件本身和每個用到資料的地方。
import { Injectable } from '@angular/core';

// 資料來源。真實情況應是遠端fetch
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// 非同步rxjs
import { Observable, of } from 'rxjs';

// 注入其它service.你把 MessageService 注入到了 HeroService 中，而 HeroService 又被注入到了 HeroesComponent 中。
import { MessageService } from './message.service';

// 寫這個，才能被注入到其它component中
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  // 同步寫法
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  // 非同步寫法，rxjs
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');

    return of(HEROES);
  }

// for hero-detail
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
