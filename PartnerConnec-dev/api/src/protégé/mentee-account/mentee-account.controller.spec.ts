import { Test, TestingModule } from '@nestjs/testing';
import { MenteeAccountController } from './mentee-account.controller';

describe('MenteeAccountController', () => {
  let controller: MenteeAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenteeAccountController],
    }).compile();

    controller = module.get<MenteeAccountController>(MenteeAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
