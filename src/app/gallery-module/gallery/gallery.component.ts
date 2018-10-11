import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  public images = [];

  constructor(private ImageService: ImageService){}

  ngOnInit() {
    this.images = this.ImageService.getImages();
  }

}
