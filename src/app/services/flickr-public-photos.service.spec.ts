import { TestBed } from '@angular/core/testing';

import { FlickrPublicPhotosService } from './flickr-public-photos.service';

describe('FlickrPublicPhotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlickrPublicPhotosService = TestBed.get(FlickrPublicPhotosService);
    expect(service).toBeTruthy();
  });
});
