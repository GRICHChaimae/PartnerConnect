import { Module } from '@nestjs/common';
import { UpdateAdminPasswordService } from './update-admin-password.service';
import { UpdateAdminPasswordController } from './update-admin-password.controller';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/admin schemas/user.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  providers: [UpdateAdminPasswordService],
  controllers: [UpdateAdminPasswordController]
})
export class UpdateAdminPasswordModule {}
