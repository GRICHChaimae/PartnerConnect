import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/admin/auth/auth.module';
import { Protégé, ProtégéSchema } from '../schemas/protégé.schema';
import { ListProtégésController } from './list-protégés.controller';
import { ListProtégésService } from './list-protégés.service';;

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: Protégé.name, schema: ProtégéSchema}])
  ],
  controllers: [ListProtégésController],
  providers: [ListProtégésService]
})
export class ListProtégésModule {}
