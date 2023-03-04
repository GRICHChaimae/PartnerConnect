import { Test, TestingModule } from '@nestjs/testing';
import { ListProtégésService } from './list-protégés.service';

describe('ListProtégésService', () => {
  let service: ListProtégésService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListProtégésService],
    }).compile();

    service = module.get<ListProtégésService>(ListProtégésService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
