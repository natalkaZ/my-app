import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GalleryComponent } from "./gallery.component";
import { GalleryItemComponent } from "./gallery-item/gallery-item.component";
import { GalleryFormComponent } from './gallery-form/gallery-form.component';
import { GalleryHomeComponent } from './gallery-home/gallery-home.component';
import { GalleryItemResolverService } from './gallery-item/gallery-item.resolver.service';
import { GalleryResolverService } from './gallery.resolver.service';
import { AuthGuard } from '../../auth/auth.guard';
import { FormsModule } from '@angular/forms';

const imagesRoutes: Routes = [
        {
          path: '',
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
        }
]

@NgModule({
  imports: [CommonModule, 
            FormsModule, 
            RouterModule.forChild(imagesRoutes)
          ],
  declarations: [GalleryComponent, 
                 GalleryHomeComponent, 
                 GalleryItemComponent, 
                 GalleryFormComponent
                ],
  exports: [RouterModule]
})
export class GalleryRoutingModule {}