import { ImageItem, UserInfo } from './../model/img-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-view-list',
  templateUrl: './image-view-list.component.html',
  styleUrls: ['./image-view-list.component.scss']
})
export class ImageViewListComponent implements OnInit {
  @Input() imgArray: ImageItem[];
  @Input() topList?: boolean;
  @Input() sortAsc: boolean;
  @Input() orderProp: string;
  userInfo: UserInfo;
  constructor() { }

  ngOnInit() {
    this.imgArray.forEach((x: ImageItem & { disable: boolean }) => { x.disable = false; });
  }

  onImgItemChange() {
    this.loadUserInfo();
    if (this.userInfo.imgInfo.length === 10) {
      // this.imgArray = this.compare2Arrays(this.imgArray, this.userInfo.imgInfo);
    }
    localStorage.setItem('imgArr', JSON.stringify(this.imgArray));
  }

  compare2Arrays(arr1, arr2) {
    const tempArr = [];
    arr1.forEach(e1 => arr2.forEach(e2 => {
      if (e1.id !== e2.id) {
        e1.disable = true;
        tempArr.push(e1);
      }
    }));
    return tempArr;
  }

  loadUserInfo() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }

}
