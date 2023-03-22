import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Parrain } from 'src/schemas/parrain schemas/parrain.schema';
import { Protégé } from 'src/schemas/protégé schemas/protégé.schema';

@Injectable()
export class MentorMenteesService {
    constructor(
        @InjectModel(Protégé.name)
        private mentorMentees: mongoose.Model<Protégé>
    ) {}

    async getMentorMentees(parrain: Parrain): Promise<Protégé[]> {
        const menteesOfMentor = await this.mentorMentees.find({ mentor: parrain._id }, { password: 0 });
        return menteesOfMentor
    }
}
