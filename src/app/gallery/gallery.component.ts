import { Component, OnInit, OnChanges } from '@angular/core';
import { IMAGES } from '../images';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  images = IMAGES;

  remove(){
    this.images.splice(0, 1);
  };

  constructor() { 
    
   }
  ngOnInit() {
  }

}
