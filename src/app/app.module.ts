import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GalleryModule } from './gallery-module/gallery-module.module';
import { ImageService } from './gallery-module/image.service';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { GalleryHomeComponent } from './gallery-module/gallery/gallery-home/gallery-home.component';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service'
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryHomeComponent,
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    HttpClientModule,
    RouterModule,
    GalleryModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [ImageService, LoginComponent, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
