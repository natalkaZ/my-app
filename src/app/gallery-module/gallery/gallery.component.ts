import { Component, OnInit, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';
import { Image } from '../image';
import { Observable } from 'rxjs';

interface myData{
  gallery: Object;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [ slideInAnimation ]
})


export class GalleryComponent implements OnInit {
  // @Input() image;
  images$: Observable<Image[]>;
  public images: Image[];
  selectedImage: number;

  constructor(private ImageService: ImageService,
              private activatedRoute: ActivatedRoute){ }

  
  onDelete(image: Image): void {
    this.images = this.images.filter(i => i !== image);
    this.ImageService.deleteImage(image).subscribe();
} 

ngOnInit() {
  this.ImageService.getImages().subscribe((data: Image[]) => {
    this.images = data;
  });

  this.images$ = this.activatedRoute.paramMap.pipe(
    switchMap(params => {
      // (+) before `params.get()` turns the string into a number
      this.selectedImage = +params.get('id');
      return this.ImageService.getImages();
      })
  );
}

getAnimationData(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}

// onSelect(image: Image): void {
//   this.selectedImage = image;
//   this.ImageService.selectImage(image).subscribe();
//   console.log('You choose this image:' + image.title);
// }

}