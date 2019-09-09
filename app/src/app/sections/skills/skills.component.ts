import { Component, OnInit } from '@angular/core';
import { datas } from '../../datas';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  datas = datas;

  constructor() { }

  ngOnInit() {
  }

  title = datas[2].title;
  description = datas[2].description;

}
