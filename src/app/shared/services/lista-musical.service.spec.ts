import { TestBed } from '@angular/core/testing';

import { ListaMusicalService } from './lista-musical.service';

describe('ListaMusicalService', () => {
  let service: ListaMusicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaMusicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
