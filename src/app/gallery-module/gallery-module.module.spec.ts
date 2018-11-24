import { GalleryModule } from './gallery-module.module';

describe('GalleryModule', () => {
  let galleryModule: GalleryModule;

  beforeEach(() => {
    galleryModule = new GalleryModule();
  });

  it('should create an instance', () => {
    expect(galleryModule).toBeTruthy();
  });
});
