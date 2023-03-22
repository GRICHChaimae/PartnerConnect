import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Activity } from 'src/schemas/activities-calnder schemas/activities-calnder.schemas';
import { GetActivitiesService } from './get-activities.service';

@Controller('api/v1/get-activities')
export class GetActivitiesController {
    constructor(private getActivitiesService: GetActivitiesService) {}

    @Get()
    @UseGuards(AuthGuard())
    async findActivitiesOfMentor(@Req() req): Promise<Activity[]> {
        return this.getActivitiesService.findMentorActivities(req.user)
    }
}
