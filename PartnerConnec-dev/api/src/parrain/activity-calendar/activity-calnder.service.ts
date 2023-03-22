import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Activity } from 'src/schemas/activities-calnder schemas/activities-calnder.schemas';
import { Parrain } from 'src/schemas/parrain schemas/parrain.schema';
import { ActivityDto } from './dto/activity.dto';

@Injectable()
export class ActivityCalnderService {
    constructor(
        @InjectModel(Activity.name)
        private activityModel: Model<Activity>
    ) {}

    async createAnActivity(activityDto: ActivityDto, mentor: Parrain): Promise<string> {
        const { title, place, date, description } = activityDto

        const activity = await this.activityModel.create({
            title,
            place,
            date,
            description,
            mentor: mentor._id,
        })

        return 'The activity added successfully';
    }
}
