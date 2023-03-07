import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/admin/auth/auth.module';
import { Parrain, ParrainSchema } from 'src/schemas/parrain schemas/parrain.schema';
import { Protégé, ProtégéSchema } from 'src/schemas/protégé schemas/protégé.schema';
import { DeleteParrainController } from './delete-parrain.controller';
import { DeleteParrainService } from './delete-parrain.service';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: Parrain.name, schema: ParrainSchema }, { name: Protégé.name, schema: ProtégéSchema }])
  ],
  controllers: [DeleteParrainController],
  providers: [DeleteParrainService]
})
export class DeleteParrainModule {}
