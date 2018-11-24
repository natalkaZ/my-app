import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { Image } from './image';
import { catchError, tap, first } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { GalleryResolverService } from './gallery/gallery.resolver.service';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ImageService implements OnInit {
  private imagesUrl = 'http://localhost:3000/gallery'; 
  public images = [];
  GalleryL: number; 
  NewTitle:string;
  NewUrl:string;
  message:string;

  constructor(private httpClient:HttpClient,
              private auth: AuthService,
              private activatedRoute: ActivatedRoute
              ){}

  //handle Error
  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  getImages():Observable<Image[]> {
    return this.httpClient.get<Image[]>(this.imagesUrl)
    .pipe(
      tap((images = this.images) => console.log('fetched images', images)),
      catchError(this.handleError('getImages', []))
    );
  }

  /** GET image by id **/
  getImage(id: number | string): Observable<Image> {
    const url = `${this.imagesUrl}/${id}`;
    return this.httpClient.get<Image>(url).pipe(
      tap(_ => console.log(`fetched image id=${id}`)),
      catchError(this.handleError<Image>(`getImage id=${id}`))
    );
  }

  /** DELETE **/
deleteImage (image: Image | number): Observable<Image> {
  const id = typeof image === 'number' ? image : image.id;
  const url = `${this.imagesUrl}/${id}`;

  return this.httpClient.delete<Image>(url, httpOptions).pipe(
    tap(_ => console.log(`deleted image id=${id}`)),
    catchError(this.handleError<Image>('deleteImage'))
  );
}

  /** POST **/
  add (image: Image): Observable<Image> {
    const id = typeof image === 'number' ? image : image.id;
    const url = `${this.imagesUrl}`;

    return this.httpClient.post<Image>(url, image, httpOptions).pipe(
      tap((image: Image) => console.log(`added image id=${image.id}`)),
      catchError(this.handleError<Image>('add'))
    );
  }
  
  ngOnInit(){}

}