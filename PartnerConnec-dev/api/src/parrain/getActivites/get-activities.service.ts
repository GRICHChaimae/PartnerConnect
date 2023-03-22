import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Activity } from 'src/schemas/activities-calnder schemas/activities-calnder.schemas';
import { Parrain } from 'src/schemas/parrain schemas/parrain.schema';

@Injectable()
export class GetActivitiesService {
    constructor(
        @InjectModel(Activity.name)
        private activityModel: 
        mongoose.Model<Activity>
    ) {}

    async findMentorActivities(mentor: Parrain): Promise<Activity[]> {
        const activitiesOfMentor = await this.activityModel.find({ mentor: mentor._id })
        return activitiesOfMentor;
    }
}
