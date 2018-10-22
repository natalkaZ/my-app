import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../../image.service';
import{Image} from '../../image'

@Component({
  selector: 'app-gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.css']
})

export class GalleryFormComponent implements OnInit {
  @Input() images;
  NewTitle:string = "";
  NewUrl:string = ""; 
  GalleryL: number = null;
  image = {
    id: null,
    title: '',
    url: ''
  } 

 constructor(private ImageService: ImageService) {  }
  add(NewTitle, NewUrl){  
    if (this.NewTitle && this.NewUrl) {
      this.GalleryL = this.images.lenght;
      this.image.id = this.GalleryL + 1;
      this.image.title = this.NewTitle;
      this.image.url = this.NewUrl;
      this.ImageService.add( this.image as Image)
      .subscribe(image => {
        this.images.unshift(this.image);
    });
    this.NewTitle = "";
    this.NewUrl = "";
  }
    console.log(this.images);
    return this.images;
  }
  ngOnInit() {  
  }

}
