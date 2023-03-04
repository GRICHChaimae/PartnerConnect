import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/admin/auth/auth.module';
import { ListProtégésController } from './list-protégés.controller';
import { ListProtégésService } from './list-protégés.service';
import { Protégé, ListProtégéSchema } from './schemas/protégélist.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: Protégé.name, schema: ListProtégéSchema}])
  ],
  controllers: [ListProtégésController],
  providers: [ListProtégésService]
})
export class ListProtégésModule {}
