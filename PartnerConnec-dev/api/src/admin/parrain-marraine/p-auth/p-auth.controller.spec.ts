import { Test, TestingModule } from '@nestjs/testing';
import { PAuthController } from './p-auth.controller';

describe('PAuthController', () => {
  let controller: PAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PAuthController],
    }).compile();

    controller = module.get<PAuthController>(PAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
