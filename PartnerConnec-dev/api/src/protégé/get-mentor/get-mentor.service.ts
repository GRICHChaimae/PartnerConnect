import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Parrain } from 'src/schemas/parrain schemas/parrain.schema';
import { Protégé } from 'src/schemas/protégé schemas/protégé.schema';

@Injectable()
export class GetMentorService {
    constructor(
        @InjectModel(Parrain.name)
        private prrainData: mongoose.Model<Parrain>
    ) {}

    async getMentorInfo(mentee: Protégé): Promise<Parrain> {
        const mentor = await this.prrainData.findOne({ _id: mentee.mentor }, { password: 0 })
        return mentor;
    }
}
