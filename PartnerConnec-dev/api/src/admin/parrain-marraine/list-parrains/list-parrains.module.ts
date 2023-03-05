import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/admin/auth/auth.module';
import { Parrain, ParrainSchema } from '../schemas/parrain.schema';
import { ListParrainsController } from './list-parrains.controller';
import { ListParrainsService } from './list-parrains.service';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: Parrain.name, schema: ParrainSchema }]),
  ],
  controllers: [ListParrainsController],
  providers: [ListParrainsService]
})
export class ListParrainsModule {}
