import { Component, OnInit } from '@angular/core';
import { IMAGES } from './images';
import { ImageService } from './image.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  public images = IMAGES;

  constructor(private ImageService: ImageService){}

  ngOnInit() {
  }

}
