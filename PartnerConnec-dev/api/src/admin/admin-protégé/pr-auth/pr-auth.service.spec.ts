import { Test, TestingModule } from '@nestjs/testing';
import { PrAuthService } from './pr-auth.service';

describe('PrAuthService', () => {
  let service: PrAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrAuthService],
    }).compile();

    service = module.get<PrAuthService>(PrAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
