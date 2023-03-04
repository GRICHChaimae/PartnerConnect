import { Test, TestingModule } from '@nestjs/testing';
import { PrAuthController } from './pr-auth.controller';

describe('PrAuthController', () => {
  let controller: PrAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrAuthController],
    }).compile();

    controller = module.get<PrAuthController>(PrAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
