import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../admin schemas/user.schema';

@Schema({
  timestamps: true,
})
export class Parrain {
  @Prop()
  name: string;
  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;
  @Prop()
  password: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  admin: User;
}

export const ParrainSchema = SchemaFactory.createForClass(Parrain);
