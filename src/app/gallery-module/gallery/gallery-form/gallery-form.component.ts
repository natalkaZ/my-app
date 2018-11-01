import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { Router,  ActivatedRoute } from '@angular/router';
import { ImageService } from '../../image.service';
import{ Image } from '../../image';

@Component({
  selector: 'app-gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.css']
})


export class GalleryFormComponent implements OnInit {
  images$: Observable<Image[]>
  public images = [];
  NewTitle:string = "";
  NewUrl:string = ""; 
  GalleryL: number;
  image : Image;

  constructor(private ImageService: ImageService,
             private activatedRoute: ActivatedRoute,
             private router: Router) {  }

  add(NewTitle, NewUrl){ 
    if (this.NewTitle && this.NewUrl) {
      this.image = {
        id: null,
        title: '',
        url: ''
      }  
      this.GalleryL = this.ImageService.GalleryL;
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
    return this.images;
  }

  gotoGallery(image: Image) {
    this.router.navigate(['/gallery']);
  }

  ngOnInit() {  
    this.images$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        return this.ImageService.getImages();
        })
    );
  }

}
