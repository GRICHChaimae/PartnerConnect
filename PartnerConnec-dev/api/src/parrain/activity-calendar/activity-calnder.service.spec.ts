import { Test, TestingModule } from '@nestjs/testing';
import { ActivityCalnderService } from './activity-calnder.service';

describe('ActivityCalnderService', () => {
  let service: ActivityCalnderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivityCalnderService],
    }).compile();

    service = module.get<ActivityCalnderService>(ActivityCalnderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
