import { Module } from '@nestjs/common';
import { AuthModule } from 'src/admin/auth/auth.module';
import { PAuthController } from './p-auth.controller';
import { PAuthService } from './p-auth.service';

@Module({
  imports: [AuthModule],
  controllers: [PAuthController],
  providers: [PAuthService],
})
export class PAuthModule {}
