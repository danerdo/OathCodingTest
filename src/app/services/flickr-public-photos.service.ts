import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from '../models/interfaces/photo';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FlickrPublicPhotosService {
  flickrPublicPhotosUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?';

  constructor(private http: HttpClient) { }

  // retrieve list of images, using supplied tag
  getPublicPhotosUsingTag(tags: string) {
    tags = tags.trim();

    // this will be used to create the URL params
    let params = new HttpParams()
      .set('format', 'json')
      .set('jsoncallback', 'JSONP_CALLBACK')
      .set('tags', tags);

    // return an observable of the photo array
    return this.http.jsonp<Photo[]>(`${this.flickrPublicPhotosUrl}${params.toString()}`, 'JSONP_CALLBACK').pipe(
      map((flickrResponse: any) => flickrResponse.items)
    );
  }
}
