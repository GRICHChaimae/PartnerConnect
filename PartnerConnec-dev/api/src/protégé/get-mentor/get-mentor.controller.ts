import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetMentorService } from './get-mentor.service';

@Controller('api/v1/get-mentor')
export class GetMentorController {
    constructor(private GetMentorService: GetMentorService) {}

    @Get() 
    @UseGuards(AuthGuard())
    async getMentorInfo(@Req() req) {
        return this.GetMentorService.getMentorInfo(req.user)
    }
}
