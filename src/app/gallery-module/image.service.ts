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
    return IMAGES;
  }
  //from gallery-item
  // images = IMAGES;
  // image:any;
  // delete = this.delete;

  // @Output() delete = new EventEmitter<any>();

  // onDelete(image) {
  //   this.delete.emit(this.images.splice(this.images.indexOf(image), 1));
  // } 

  onDelete(image) {
    this.images.splice(this.images.indexOf(image), 1);
  } 

  //from gallery-form
  // @Input() images;
  // GalleryL = IMAGES.length;
  
  // NewTitle:string = "";
  // NewUrl:string = "";

  add(){
    if (this.NewTitle && this.NewUrl) {
        this.images.unshift({
          id: this.GalleryL + 1,
          title: this.NewTitle,
          url: this.NewUrl
        });
        this.GalleryL += 1;
        
        this.NewTitle = "";
        this.NewUrl = "";
      console.log(this.images);
    }
  }

}