import { Test, TestingModule } from '@nestjs/testing';
import { MentorLoginController } from './mentor-login.controller';

describe('MentorLoginController', () => {
  let controller: MentorLoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MentorLoginController],
    }).compile();

    controller = module.get<MentorLoginController>(MentorLoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
