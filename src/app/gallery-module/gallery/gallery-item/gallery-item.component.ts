// import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import {ImageService} from '../image.service'

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})

export class GalleryItemComponent implements OnInit {
  @Input() images;
  @Input() image;
  // @Output() delete = new EventEmitter<any>();

  constructor(private ImageService: ImageService) {
  }

  // onDelete(image) {
  //   this.delete.emit(this.images.splice(this.images.indexOf(image), 1));
  // } 

  ngOnInit() {
  }

}
