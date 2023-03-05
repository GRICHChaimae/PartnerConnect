import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/admin/auth/auth.module';
import { PAuthController } from './p-auth.controller';
import { PAuthService } from './p-auth.service';
import { Parrain, ParrainSchema } from '../schemas/parrain.schema';
import { ModuleMailerModule } from '../../../modules/module-mailer.module';

@Module({
  imports: [
    AuthModule,
    ModuleMailerModule,
    MongooseModule.forFeature([{ name: Parrain.name, schema: ParrainSchema }]),
  ],
  controllers: [PAuthController],
  providers: [PAuthService],
})
export class PAuthModule {}
