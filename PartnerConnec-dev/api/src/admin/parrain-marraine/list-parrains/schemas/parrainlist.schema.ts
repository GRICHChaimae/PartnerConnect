import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/admin/auth/schemas/user.schema';

@Schema({
  timestamps: true,
})
export class Parrain {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  admin: User;
}

export const ListParrainSchema = SchemaFactory.createForClass(Parrain);
