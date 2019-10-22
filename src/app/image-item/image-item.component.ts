import { ImageItem, UserInfo } from './../model/img-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements OnInit {
  userInfo: UserInfo = new UserInfo();
  isUserVote: boolean;
  imgArr: ImageItem[] = [];
  @Input() imgItem: ImageItem;
  @Input() disable: boolean;
  @Output() imgItemChange = new EventEmitter<ImageItem>();
  constructor() { }

  ngOnInit() {
    this.loadUserInfo();
    this.reloadIsUserVote();
  }

  loadUserInfo() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.imgArr = this.userInfo.imgInfo ? this.userInfo.imgInfo : [];
  }

  reloadIsUserVote() {
    this.isUserVote = this.imgArr.some(x => x.id === this.imgItem.id);
  }

  onRateChange() {
    this.loadUserInfo();
    if (this.imgItem.star === 0) {
      this.imgItem.rate -= 1;
      this.imgArr = this.imgArr.filter(x => x.id !== this.imgItem.id);
    } else {
      if (this.imgArr.length < 10) {
        this.imgItem.rate += 1;
        this.imgArr.push(this.imgItem);
      }
    }
    this.userInfo.imgInfo = this.imgArr;
    localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    this.reloadIsUserVote();
    this.imgItemChange.emit(this.imgItem);
  }

}
