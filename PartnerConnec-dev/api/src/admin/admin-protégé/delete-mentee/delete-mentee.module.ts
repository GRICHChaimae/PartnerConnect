import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/admin/auth/auth.module';
import { ModuleMailerModule } from 'src/modules/module-mailer.module';
import { Protégé, ProtégéSchema } from 'src/schemas/protégé schemas/protégé.schema';
import { DeleteMenteeController } from './delete-mentee.controller';
import { DeleteMenteeService } from './delete-mentee.service';

@Module({
  imports: [
    AuthModule,
    ModuleMailerModule,
    MongooseModule.forFeature([{name: Protégé.name, schema: ProtégéSchema}]),
  ],
  controllers: [DeleteMenteeController],
  providers: [DeleteMenteeService]
})
export class DeleteMenteeModule {}
