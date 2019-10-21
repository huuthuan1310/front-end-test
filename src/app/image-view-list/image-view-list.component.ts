import { ImageItem } from './../model/img-item';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'app-image-view-list',
  templateUrl: './image-view-list.component.html',
  styleUrls: ['./image-view-list.component.scss']
})
export class ImageViewListComponent implements OnInit, OnChanges {
  @Input() imgArray: ImageItem[];
  @Input() topList?: boolean;
  @Output() sortList ?= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  sortTopList() {
    const cloneArr = JSON.parse(JSON.stringify(this.imgArray));
    cloneArr.sort((a, b) => a.rate < b.rate ? 1 : ((b.rate < a.rate) ? -1 : 0));
    return cloneArr;
  }

  onImgItemChange(e: ImageItem) {
    localStorage.setItem('imgArray', JSON.stringify(this.imgArray));
    this.sortList.emit();
  }

}
