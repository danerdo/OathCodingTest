import { Component, OnInit } from '@angular/core';
import { FlickrPublicPhotosService } from '../../services/flickr-public-photos.service';
import { Photo } from '../../models/interfaces/photo';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  photoList: Photo[];
  cols: number;

  constructor(private flickrPublicPhotosService: FlickrPublicPhotosService) { }

  ngOnInit() {
    // call flickr public photo service, then subscribe to the returned observable
    // and assign the result to "photoList"
    this.flickrPublicPhotosService.getPublicPhotosUsingTag('kitten').subscribe(photoList => this.photoList = photoList);

    // set the initial number of columns based on window.innerWidth
    this.cols = this.setCols(window.innerWidth);
  }

  // sets number of columns each time the event is fired
  onResize(event) {
    this.cols = this.setCols(event.target.innerWidth);
  }

  // breakpoints for different screen widths
  setCols(screenWidth: number) {
    if (screenWidth > 1200) {
      return 4;
    } else if (screenWidth > 900) {
      return 3;
    } else if (screenWidth > 600) {
      return 2;
    } else {
      return 1;
    }
  }

  openImage(link: string): void {
    window.open(link, "_blank");
  }
}
