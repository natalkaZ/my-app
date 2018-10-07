import { Injectable, EventEmitter, Output, Input } from '@angular/core';
import { IMAGES } from './images'; //можна залишити так чи потрібно було перенести саме масив с картинками?

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  //from gallery-item
  @Input() images;
  @Input() image;

  @Output() delete = new EventEmitter<any>();

  onDelete(image) {
    this.delete.emit(this.images.splice(this.images.indexOf(image), 1));
  } 

  //from gallery-form
  // @Input() images;
  GalleryL = IMAGES.length;
  
  NewTitle:string = "";
  NewUrl:string = "";

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