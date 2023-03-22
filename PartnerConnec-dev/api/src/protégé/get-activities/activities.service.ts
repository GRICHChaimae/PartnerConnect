import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Activity } from 'src/schemas/activities-calnder schemas/activities-calnder.schemas';

@Injectable()
export class ActivitiesService {
    constructor(
        @InjectModel(Activity.name)
        private activityModel: mongoose.Model<Activity>
    ) {}

    async findMenteeActivities(id: string): Promise<Activity[]> {
        const activitiesOfMentee = await this.activityModel.find({ mentor: id })
        return activitiesOfMentee;
    }
}
