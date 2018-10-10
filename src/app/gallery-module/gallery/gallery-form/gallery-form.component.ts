import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../../image.service';

@Component({
  selector: 'app-gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.css']
})

export class GalleryFormComponent implements OnInit {
  @Input() images;

  NewTitle:string = "";
  NewUrl:string = "";  

 constructor(private ImageService: ImageService) { 
    
  }
  add(){    
    this.ImageService.NewTitle = this.NewTitle;
    this.ImageService.NewUrl = this.NewUrl;
    this.ImageService.add();
  }
  ngOnInit() {    
   
  }

}
