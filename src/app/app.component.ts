import { ImageItem, UserInfo } from './model/img-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-end-test';
  userInfo: UserInfo = new UserInfo();
  imgArr: ImageItem[];
  sortAsc = false;
  ngOnInit(): void {
    this.imgArr = localStorage.getItem('imgArr') ? JSON.parse(localStorage.getItem('imgArr')) : this.generateImg(30);
    this.userInfo = this.loadData();
    if (!localStorage.getItem('userInfo')) {
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    }
    if (!localStorage.getItem('imgArr')) {
      localStorage.setItem('imgArr', JSON.stringify(this.imgArr));
    }
  }

  loadData() {
    const userInfo: UserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : new UserInfo();
    if (Object.keys(this.userInfo).length === 0) {
      userInfo.uid = this.getRandomInt(1, 1000);
    }
    return userInfo;
  }

  generateImg(numItem: number) {
    const imgArr: ImageItem[] = [];
    for (let index = 1; index <= numItem; index++) {
      const imgURL = 'photo-' + index + '.jpg';
      const imgName = 'Photo ' + index;
      imgArr.push({
        id: index,
        url: imgURL,
        name: imgName,
        star: 0,
        rate: this.getRandomInt(0, 100)
      });
    }
    return imgArr;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  sortName() {
    this.sortAsc = !this.sortAsc;
  }
}
