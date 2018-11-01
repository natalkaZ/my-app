import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModuleFactoryLoader } from '@angular/core';

import {GalleryRoutingModule} from './gallery-module/gallery-routing.module';
import {GalleryComponent} from './gallery-module/gallery/gallery.component'
import { NotFoundComponent } from "./not-found/not-found.component";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/gallery',
    pathMatch: 'full',
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [GalleryRoutingModule,
            RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: [NotFoundComponent],
})
export class AppRoutingModule {
}