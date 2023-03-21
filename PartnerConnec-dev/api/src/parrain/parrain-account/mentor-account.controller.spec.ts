import { Test, TestingModule } from '@nestjs/testing';
import { MentorAccountController } from './mentor-account.controller';

describe('MentorAccountController', () => {
  let controller: MentorAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MentorAccountController],
    }).compile();

    controller = module.get<MentorAccountController>(MentorAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
