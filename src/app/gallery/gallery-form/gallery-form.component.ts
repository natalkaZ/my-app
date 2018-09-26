import { Component, OnInit, Input } from '@angular/core';
import { IMAGES } from '../../images';

@Component({
  selector: 'app-gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.css']
})

export class GalleryFormComponent implements OnInit {
  @Input() images;
  GalleryL = IMAGES.length;
  
  NewTitle:string = "";
  NewUrl:string = "";

  add(){
    if (this.NewTitle && this.NewUrl) {
        this.images.unshift({
          id: this.GalleryL + 1,
          title: this.NewTitle,
          url: this.NewUrl
        });
        this.GalleryL += 1;
        
        this.NewTitle = "";
        this.NewUrl = "";
      console.log(this.images);

  }

}

  constructor() { }

  ngOnInit() {
  }

}
