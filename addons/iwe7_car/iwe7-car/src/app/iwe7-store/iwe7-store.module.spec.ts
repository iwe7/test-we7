import { Iwe7StoreModule } from './iwe7-store.module';

describe('Iwe7StoreModule', () => {
  let iwe7StoreModule: Iwe7StoreModule;

  beforeEach(() => {
    iwe7StoreModule = new Iwe7StoreModule();
  });

  it('should create an instance', () => {
    expect(iwe7StoreModule).toBeTruthy();
  });
});
