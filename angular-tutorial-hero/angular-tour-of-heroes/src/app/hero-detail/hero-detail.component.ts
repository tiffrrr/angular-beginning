// 子元件有要接收父元件傳來的資料，需要import 「Input」
import { Component, OnInit, Input} from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // 從父元件接收來的資料
  @Input() hero: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
