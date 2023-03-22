import { Module } from '@nestjs/common';
import { MenteeAccountService } from './mentee-account.service';
import { MenteeAccountController } from './mentee-account.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProtégéSchema } from 'src/schemas/protégé schemas/protégé.schema';
import { MenteeLoginModule } from '../menteeLogin/mentee-login.module';

@Module({
  imports: [
    MenteeLoginModule,
    MongooseModule.forFeature([{ name: 'Protégé', schema: ProtégéSchema}])
  ],
  providers: [MenteeAccountService],
  controllers: [MenteeAccountController]
})
export class MenteeAccountModule {}
