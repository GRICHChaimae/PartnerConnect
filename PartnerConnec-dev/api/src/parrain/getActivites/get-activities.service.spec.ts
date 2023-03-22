import { Test, TestingModule } from '@nestjs/testing';
import { GetActivitiesService } from './get-activities.service';

describe('GetActivitiesService', () => {
  let service: GetActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetActivitiesService],
    }).compile();

    service = module.get<GetActivitiesService>(GetActivitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
