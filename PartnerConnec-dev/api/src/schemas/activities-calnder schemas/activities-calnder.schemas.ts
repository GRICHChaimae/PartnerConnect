import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Parrain } from '../parrain schemas/parrain.schema';

@Schema({
  timestamps: true,
})
export class Activity {
  @Prop()
  title: string;
  @Prop()
  place: string;
  @Prop()
  date: Date;
  @Prop()
  description: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Parrain' })
  mentor: Parrain;
  _id: mongoose.Types.ObjectId;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
