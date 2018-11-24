import { Component, OnInit, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';
import { Image } from '../image';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

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
  public images: Image[];
  selectedImage: number;
  message: string;

  constructor(private ImageService: ImageService,
              private activatedRoute: ActivatedRoute,
              private auth: AuthService){ }

  
  onDelete(image: Image): void {
    this.images = this.images.filter(i => i !== image);
    this.ImageService.deleteImage(image).subscribe();
} 

ngOnInit() {
  this.images = this.activatedRoute.snapshot.data['images'];
  
  console.log('this loggedInStatus' + this.auth.loggedInStatus);

}

getAnimationData(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}

}