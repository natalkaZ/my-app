import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
  @Input() images;
  // @Input() Image;

  @Output() delete = new EventEmitter<any>();

  onDelete() {
    this.delete.emit(this.images.splice(0, 1));
  }  

  constructor(){   }

  ngOnInit() {
  }

}
