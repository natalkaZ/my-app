import { Component, OnInit, Input } from '@angular/core';
import {ImageService} from '../../image.service'

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

  onDelete(image){
    return this.ImageService.onDelete(image);
  }  

  ngOnInit() {  }

}
