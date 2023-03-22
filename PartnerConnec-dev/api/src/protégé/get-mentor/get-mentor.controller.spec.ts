import { Test, TestingModule } from '@nestjs/testing';
import { GetMentorController } from './get-mentor.controller';

describe('GetMentorController', () => {
  let controller: GetMentorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetMentorController],
    }).compile();

    controller = module.get<GetMentorController>(GetMentorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
