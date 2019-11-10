import { TestBed } from '@angular/core/testing';

import { CadastradosService } from './cadastrados.service';

describe('CadastradosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastradosService = TestBed.get(CadastradosService);
    expect(service).toBeTruthy();
  });
});
