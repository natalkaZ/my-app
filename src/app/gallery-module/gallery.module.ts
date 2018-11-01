import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { GalleryFormComponent } from './gallery/gallery-form/gallery-form.component';
import { GalleryRoutingModule } from './gallery-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GalleryRoutingModule
  ],
  exports: [
    GalleryComponent,
    GalleryItemComponent,
    GalleryFormComponent
  ],
  declarations: [
    GalleryComponent,
    GalleryItemComponent,
    GalleryFormComponent
  ]
})

export class GalleryModule {


 }
