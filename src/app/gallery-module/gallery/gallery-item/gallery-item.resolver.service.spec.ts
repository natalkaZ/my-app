import { TestBed } from '@angular/core/testing';

import { GalleryItemResolverService } from './gallery-item.resolver.service';

describe('GalleryItemResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GalleryItemResolverService = TestBed.get(GalleryItemResolverService);
    expect(service).toBeTruthy();
  });
});
