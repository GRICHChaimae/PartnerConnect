import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/admin/auth/auth.module';
import { ModuleMailerModule } from 'src/modules/module-mailer.module';
import { Parrain, ParrainSchema } from 'src/schemas/parrain schemas/parrain.schema';
import { Protégé, ProtégéSchema } from 'src/schemas/protégé schemas/protégé.schema';
import { PrAuthController } from './pr-auth.controller';
import { PrAuthService } from './pr-auth.service';

@Module({
  imports: [
    AuthModule,
    ModuleMailerModule,
    MongooseModule.forFeature([{ name: Protégé.name, schema: ProtégéSchema }, { name: Parrain.name, schema: ParrainSchema }]),
  ],
  controllers: [PrAuthController],
  providers: [PrAuthService],
})
export class PrAuthModule {}
