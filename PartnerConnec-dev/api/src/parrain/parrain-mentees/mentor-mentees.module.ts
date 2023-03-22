import { Module } from '@nestjs/common';
import { MentorMenteesService } from './mentor-mentees.service';
import { MentorMenteesController } from './mentor-mentees.controller';
import { MentorLoginModule } from '../Login/mentor-login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Protégé, ProtégéSchema } from 'src/schemas/protégé schemas/protégé.schema'

@Module({
  imports: [
    MentorLoginModule,
    MongooseModule.forFeature([{ name: Protégé.name, schema: ProtégéSchema }])
  ],
  providers: [MentorMenteesService],
  controllers: [MentorMenteesController]
})
export class MentorMenteesModule {}
