import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Activity } from 'src/schemas/activities-calnder schemas/activities-calnder.schemas';
import { ActivitiesService } from './activities.service';

@Controller('api/v1/activities')
export class ActivitiesController {
    constructor(private activitiesService: ActivitiesService) {}

    @Get(':id')
    @UseGuards(AuthGuard())
    async getActivities(
        @Param('id')
        id: string,
    ): Promise<Activity[]> {
        return this.activitiesService.findMenteeActivities(id)
    }
}
