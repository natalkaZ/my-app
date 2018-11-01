import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from "./gallery/gallery.component";
import { GalleryItemComponent } from "./gallery/gallery-item/gallery-item.component";
import { GalleryFormComponent } from './gallery/gallery-form/gallery-form.component';

const imagesRoutes: Routes = [
        {
          path: 'gallery',
          component: GalleryComponent,
          data: {animation: 'gallery'}
        }, 
        {
          path: 'gallery-item/:id',
          component: GalleryItemComponent,
          data: {animation: 'gallery-item'}
        },      
        {
        path: 'gallery-form',
        component: GalleryFormComponent,
        data: {animation: 'gallery-form'}
      },
]

@NgModule({
  imports: [RouterModule.forChild(imagesRoutes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule {}