// 子元件有要接收父元件傳來的資料，需要import 「Input」
import { Component, OnInit, Input} from '@angular/core';

import { Hero } from '../hero';

//獲取本元件的路由，從這個路由中提取出 id
// 透過 HeroService 從伺服器上獲取具有這個 id 的英雄資料。
import { ActivatedRoute } from '@angular/router'; //儲存著到這個 HeroDetailComponent 實例的路由資訊。
import { Location } from '@angular/common'; //location 是一個 Angular 的服務，用來與瀏覽器打交道。 稍後，你就會使用它來導航回上一個檢視
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // 從父元件接收來的資料
  @Input() hero: Hero;
  //獲取本元件的路由，從這個路由中提取出 id
  // 透過 HeroService 從伺服器上獲取具有這個 id 的英雄資料。
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    //route.snapshot  = 一個路由資訊的靜態快照，抓取自元件剛剛建立完畢之後。
    // paramMap 是一個從 URL 中提取的路由引數值的字典。 "id" 對應的值就是要獲取的英雄的 id。
    const id = +this.route.snapshot.paramMap.get('id');
    // 非同步rxjs拿去data
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

// 返回上一步
  goBack(): void {
    this.location.back();
  }
}
