import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Activity } from 'src/schemas/activities-calnder schemas/activities-calnder.schemas';
import { ActivitiesService } from './activities.service';

@Controller('api/v1/activities')
export class ActivitiesController {
    constructor(private activitiesService: ActivitiesService) {}

    @Get()
    @UseGuards(AuthGuard())
    async getActivities(@Req() req): Promise<Activity[]> {
        return this.activitiesService.findMenteeActivities(req.user)
    }
}
