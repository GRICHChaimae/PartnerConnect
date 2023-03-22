import { Test, TestingModule } from '@nestjs/testing';
import { GetActivitiesController } from './get-activities.controller';

describe('GetActivitiesController', () => {
  let controller: GetActivitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetActivitiesController],
    }).compile();

    controller = module.get<GetActivitiesController>(GetActivitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
