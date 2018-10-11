import { Injectable } from '@angular/core';
import { IMAGES } from './gallery/images';

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  images = IMAGES;
  GalleryL = IMAGES.length;  
  NewTitle:string;
  NewUrl:string;

  //from gallery.component
  getImages(){
    let localStorageItem = JSON.parse(localStorage.getItem('images'));
    localStorageItem == null ? [] : localStorageItem.images;
    return this.images = localStorageItem;;
  }

  private setLocalStorageImage(images): void{
    localStorage.setItem('images', JSON.stringify(images));
  }
  //from gallery-item
  onDelete(image) {
    this.images.splice(this.images.indexOf(image), 1);
    this.setLocalStorageImage(this.images);
  } 

  //from gallery-form
  add(){
    if (this.NewTitle && this.NewUrl) {
        this.images.unshift({
          id: this.GalleryL + 1,
          title: this.NewTitle,
          url: this.NewUrl
        });        
        this.setLocalStorageImage(this.images);

        this.GalleryL += 1;
        this.NewTitle = "";
        this.NewUrl = "";
        console.log(this.images);
    }
  }

}