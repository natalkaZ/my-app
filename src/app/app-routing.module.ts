import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GalleryRoutingModule} from './gallery-module/gallery-routing.module';
import {GalleryModule} from './gallery-module/gallery-module.module';
import {GalleryComponent} from './gallery-module/gallery/gallery.component';
import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthGuard } from './auth/auth.guard';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/gallery-home',
    pathMatch: 'full',
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    // loadChildren: 'src/app/gallery-module/gallery-module.module#GalleryModule',
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [GalleryRoutingModule,
            GalleryModule,
            RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: [NotFoundComponent],
})
export class AppRoutingModule {
}