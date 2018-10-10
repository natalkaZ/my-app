import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GalleryModule } from './gallery-module/gallery.module';
import { ImageService } from './gallery-module/image.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GalleryModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
