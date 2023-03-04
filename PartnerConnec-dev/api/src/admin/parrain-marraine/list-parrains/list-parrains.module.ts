import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/admin/auth/auth.module';
import { ListParrainsController } from './list-parrains.controller';
import { ListParrainsService } from './list-parrains.service';
import { Parrain, ListParrainSchema } from './schemas/parrainlist.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: Parrain.name, schema: ListParrainSchema }]),
  ],
  controllers: [ListParrainsController],
  providers: [ListParrainsService]
})
export class ListParrainsModule {}
