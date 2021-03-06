import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,  ActivatedRoute } from '@angular/router';
import {ImageService} from '../../image.service';
import{Image} from '../../image';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})

export class GalleryItemComponent implements OnInit {
  image$: Observable<Image>;
  image: Image;  

  constructor(private ImageService: ImageService,
              private activatedRoute: ActivatedRoute,
              private router: Router){}

  gotoGallery(image: Image) {
    this.router.navigate(['/gallery']);
  }

  ngOnInit() { 
    // this.image$ = this.activatedRoute.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.ImageService.getImage(this.image))
    // );

    //resolver
    this.image = this.activatedRoute.snapshot.data['image'];
  }

}
