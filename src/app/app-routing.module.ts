import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {GalleryRoutingModule} from './gallery-module/gallery/gallery-routing.module';
import { NotFoundComponent } from "./not-found/not-found.component";
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';


const appRoutes: Routes = [
  {
    path: 'gallery',
    loadChildren: './gallery-module/gallery/gallery-module.module#GalleryModule',
    canLoad: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/gallery-home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [CommonModule, 
            FormsModule, 
            GalleryRoutingModule, 
            RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: [NotFoundComponent]
})

export class AppRoutingModule {
}