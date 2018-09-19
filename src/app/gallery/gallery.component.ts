import { Component, OnInit, OnChanges } from '@angular/core';
import { IMAGES } from '../images';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  title = 'My photo gallery';
  images = IMAGES;

  constructor() { }

  ngOnInit() {
  }

}
