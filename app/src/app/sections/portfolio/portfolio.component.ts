import { Component, OnInit } from '@angular/core';
import { datas } from '../../datas';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  datas = datas;
  constructor() { }

  ngOnInit() {
  }
  title = datas[1].title;
  description = datas[3].description;
}
