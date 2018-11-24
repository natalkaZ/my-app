import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Image } from '../../image';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ImageService } from '../../image.service';

@Injectable({
  providedIn: 'root'
})

export class GalleryItemResolverService implements Resolve<Image>{
  constructor(private httpClient:HttpClient,
              private imageService: ImageService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Image>{
    let id = +route.params['id'];
    let image = this.imageService.getImage(id);
    return image;
  }
}
