import { ImageItem } from './model/img-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-end-test';
  imgArr: ImageItem[];
  ngOnInit(): void {
    this.imgArr = this.loadImage();
  }

  loadImage() {
    let imgArr: ImageItem[] = localStorage.getItem('imgArray') ? JSON.parse(localStorage.getItem('imgArray')) : [];
    if (imgArr.length === 0) {
      imgArr = this.generateImg();
    }
    return imgArr;
  }

  generateImg() {
    const imgArr: ImageItem[] = [];
    for (let index = 1; index <= 30; index++) {
      const imgURL = 'photo-' + index + '.jpg';
      const imgName = 'Photo ' + index;
      imgArr.push({
        id: index,
        url: imgURL,
        name: imgName,
        star: this.getRandomInt(0, 6)
      });
    }
    return imgArr;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
