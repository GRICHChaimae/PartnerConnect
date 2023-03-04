import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/admin/auth/schemas/user.schema';

@Schema({
  timestamps: true,
})
export class Protégé {
  @Prop()
  name: string;
  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;
  @Prop()
  password: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  admin: User;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Parrain' })
  mentor: string;
}

export const ProtégéSchema = SchemaFactory.createForClass(Protégé);
