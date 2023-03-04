import { Test, TestingModule } from '@nestjs/testing';
import { ListParrainsService } from './list-parrains.service';

describe('ListParrainsService', () => {
  let service: ListParrainsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListParrainsService],
    }).compile();

    service = module.get<ListParrainsService>(ListParrainsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
