import { ImageItem } from './../model/img-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-view-list',
  templateUrl: './image-view-list.component.html',
  styleUrls: ['./image-view-list.component.scss']
})
export class ImageViewListComponent implements OnInit {
  @Input() imgArray: ImageItem[];

  constructor() { }

  ngOnInit() {
  }

  onImgItemChange() {
    localStorage.setItem('imgArray', JSON.stringify(this.imgArray));
  }

}
