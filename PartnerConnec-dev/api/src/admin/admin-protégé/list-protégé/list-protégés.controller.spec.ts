import { Test, TestingModule } from '@nestjs/testing';
import { ListProtégésController } from './list-protégés.controller';

describe('ListProtégésController', () => {
  let controller: ListProtégésController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListProtégésController],
    }).compile();

    controller = module.get<ListProtégésController>(ListProtégésController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
