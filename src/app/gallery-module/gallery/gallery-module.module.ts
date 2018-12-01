import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryItemResolverService } from './gallery-item/gallery-item.resolver.service';
import { GalleryResolverService } from './gallery.resolver.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GalleryRoutingModule
  ],
  providers:[
    GalleryItemResolverService,
    GalleryResolverService
  ]
})

export class GalleryModule {

}
