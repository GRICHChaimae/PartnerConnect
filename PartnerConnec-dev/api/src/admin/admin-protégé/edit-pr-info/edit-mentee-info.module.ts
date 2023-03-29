import { Module } from '@nestjs/common';
import { EditMenteeInfoService } from './edit-mentee-info.service';
import { EditMenteeInfoController } from './edit-mentee-info.controller';
import { AuthModule } from 'src/admin/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProtégéSchema } from 'src/schemas/protégé schemas/protégé.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: "Protégé", schema: ProtégéSchema}])
  ],
  providers: [EditMenteeInfoService],
  controllers: [EditMenteeInfoController]
})
export class EditMenteeInfoModule {}
