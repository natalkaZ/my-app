import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ImageService } from '../image.service';
import { Observable } from 'rxjs';
import { Image } from '../image';

@Injectable({
  providedIn: 'root'
})
export class GalleryResolverService implements Resolve<Image[]>{ 

  constructor(private imageService: ImageService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Image[]>{
    return this.imageService.getImages();
  }
}
