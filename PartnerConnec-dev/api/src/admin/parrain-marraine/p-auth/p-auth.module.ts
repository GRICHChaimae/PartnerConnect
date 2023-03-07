import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/admin/auth/auth.module';
import { PAuthController } from './p-auth.controller';
import { PAuthService } from './p-auth.service';
import { ModuleMailerModule } from '../../../modules/module-mailer.module';
import { Parrain, ParrainSchema } from 'src/schemas/parrain schemas/parrain.schema';

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
