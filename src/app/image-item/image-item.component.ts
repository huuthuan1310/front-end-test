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
    this.imgItemChange.emit(this.imgItem);
  }
}
