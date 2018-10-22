import { Component, OnInit, Input } from '@angular/core';
import {ImageService} from '../../image.service'
import{Image} from '../../image'

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})

export class GalleryItemComponent implements OnInit {
  @Input() images;
  @Input() image;

  constructor(private ImageService: ImageService) {
  }

  // onDelete(image){
  //   return this.ImageService.onDelete(image);
  // }  

  onDelete(image: Image): void {
  this.images = this.images.filter(i => i !== image);
  this.ImageService.deleteImage(image).subscribe();
} 

  ngOnInit() {  }

}
