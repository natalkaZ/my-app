import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image} from '../image'

interface myData{
  gallery: Object;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  public images: Image[];

  constructor(private ImageService: ImageService){}


ngOnInit() {
  this.ImageService.getImages().subscribe((data: Image[]) => {
    this.images = data;
  });
}

}