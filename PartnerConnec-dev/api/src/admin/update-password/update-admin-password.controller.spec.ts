import { Test, TestingModule } from '@nestjs/testing';
import { UpdateAdminPasswordController } from './update-admin-password.controller';

describe('UpdateAdminPasswordController', () => {
  let controller: UpdateAdminPasswordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateAdminPasswordController],
    }).compile();

    controller = module.get<UpdateAdminPasswordController>(UpdateAdminPasswordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
