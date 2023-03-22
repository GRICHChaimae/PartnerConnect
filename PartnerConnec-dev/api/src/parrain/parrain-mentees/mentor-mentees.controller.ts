import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Protégé } from 'src/schemas/protégé schemas/protégé.schema';
import { MentorMenteesService } from './mentor-mentees.service';

@Controller('api/v1/mentor-mentees')
export class MentorMenteesController {
    constructor(private mentorMenteesService: MentorMenteesService) {}

    @Get()
    @UseGuards(AuthGuard())
    async getMenteesOfMentor(@Req() req): Promise<Protégé[] | any> {
        return this.mentorMenteesService.getMentorMentees(req.user)
    }
}
