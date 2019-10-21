import { ImageItem } from './../model/img-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements OnInit {
  @Input() imgItem: ImageItem;
  @Output() imgItemChange = new EventEmitter<ImageItem>();
  constructor() { }

  ngOnInit() {
  }

  onRateChange() {
    if (this.imgItem.star === 0) {
      this.imgItem.rate -= 1;
    } else {
      this.imgItem.rate += 1;
    }
    this.imgItemChange.emit(this.imgItem);
  }
}
