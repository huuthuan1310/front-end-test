import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewListComponent } from './image-view-list.component';

describe('ImageViewListComponent', () => {
  let component: ImageViewListComponent;
  let fixture: ComponentFixture<ImageViewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageViewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
