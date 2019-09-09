import { Component, OnInit } from '@angular/core';
import { datas } from '../../datas';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  datas = datas;
  constructor() { }

  ngOnInit() {
  }
  title = datas[0].title;
  description = datas[0].description;
  image = datas[0].image;
}
