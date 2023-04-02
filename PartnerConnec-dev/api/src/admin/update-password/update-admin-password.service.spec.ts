import { Test, TestingModule } from '@nestjs/testing';
import { UpdateAdminPasswordService } from './update-admin-password.service';

describe('UpdateAdminPasswordService', () => {
  let service: UpdateAdminPasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateAdminPasswordService],
    }).compile();

    service = module.get<UpdateAdminPasswordService>(UpdateAdminPasswordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
