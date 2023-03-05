import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Protégé } from 'src/admin/admin-protégé/schemas/protégé.schema';
import { Parrain } from '../schemas/parrain.schema';

@Injectable()
export class DeleteParrainService {
    constructor(
        @InjectModel(Parrain.name)
        private parrainModel: mongoose.Model<Parrain>,
        @InjectModel(Protégé.name)
        private protégéModel: mongoose.Model<Protégé>
    ) {}

    async deleteParrainById(id: string): Promise<Parrain | string> {
        const protégés = await this.protégéModel.find({ mentor: id });
        console.log(protégés.length)
        if (protégés.length == 0) return await this.parrainModel.findByIdAndDelete(id);
        else return "you can not delete this mentor, because he has the mentees";
    }
}