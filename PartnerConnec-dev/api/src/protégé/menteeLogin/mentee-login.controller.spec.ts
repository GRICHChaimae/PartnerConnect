import { Test, TestingModule } from '@nestjs/testing';
import { MenteeLoginController } from './mentee-login.controller';

describe('MenteeLoginController', () => {
  let controller: MenteeLoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenteeLoginController],
    }).compile();

    controller = module.get<MenteeLoginController>(MenteeLoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
