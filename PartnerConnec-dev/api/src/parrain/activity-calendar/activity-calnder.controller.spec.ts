import { Test, TestingModule } from '@nestjs/testing';
import { ActivityCalnderController } from './activity-calnder.controller';

describe('ActivityCalnderController', () => {
  let controller: ActivityCalnderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityCalnderController],
    }).compile();

    controller = module.get<ActivityCalnderController>(ActivityCalnderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
