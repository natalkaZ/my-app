import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IMAGES } from '../images';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  public images = IMAGES;

  ngOnInit() {
  }

}
