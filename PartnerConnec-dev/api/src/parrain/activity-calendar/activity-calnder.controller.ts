import { Body, Controller, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ActivityCalnderService } from './activity-calnder.service';
import { ActivityDto } from './dto/activity.dto';

@Controller('api/v1/activity-calnder')
export class ActivityCalnderController {
    constructor(private activityCalnderService: ActivityCalnderService) {}

    @Post()
    @UseGuards(AuthGuard())
    @UsePipes(new ValidationPipe())
    addActivity(@Body()
    ActivityDto: ActivityDto,
    @Req() req,
    ) {
        return this.activityCalnderService.createAnActivity(ActivityDto, req.user)
    }
}
