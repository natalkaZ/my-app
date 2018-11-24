import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from "./gallery/gallery.component";
import { GalleryItemComponent } from "./gallery/gallery-item/gallery-item.component";
import { GalleryFormComponent } from './gallery/gallery-form/gallery-form.component';
import { GalleryHomeComponent } from './gallery/gallery-home/gallery-home.component';
import { GalleryItemResolverService } from './gallery/gallery-item/gallery-item.resolver.service';
import { GalleryResolverService } from './gallery/gallery.resolver.service';
import { AuthGuard } from '../auth/auth.guard';

const imagesRoutes: Routes = [
        {
          path: 'gallery',
          component: GalleryComponent,
          resolve: {images: GalleryResolverService},
          canActivate: [AuthGuard],
          data: {animation: 'gallery'},
        },
          {
            path: 'gallery-home',
            component: GalleryHomeComponent,
            data: {animation: 'gallery-home'}
          },
          {
            path: 'gallery-item/:id',
            component: GalleryItemComponent,
            resolve: {image: GalleryItemResolverService},
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