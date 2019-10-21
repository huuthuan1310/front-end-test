import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageItemComponent } from './image-item/image-item.component';
import { ImageViewListComponent } from './image-view-list/image-view-list.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ImageItemComponent,
    ImageViewListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgbRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
