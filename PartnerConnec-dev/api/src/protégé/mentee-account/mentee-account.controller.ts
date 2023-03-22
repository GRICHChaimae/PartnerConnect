import { Body, Controller, Param, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UpdateMenteePasswordDto } from './dto/updateMenteePassword.dto';
import { MenteeAccountService } from './mentee-account.service';

@Controller('api/v1/mentee-account')
export class MenteeAccountController {
    constructor(private menteeAccountService: MenteeAccountService) {}

    @Put()
    @UseGuards(AuthGuard())
    async updateMenteePassword(
        @Req() req, 
        @Body()
        updateMenteePasswordDto: UpdateMenteePasswordDto
    ): Promise<string> {
        return this.menteeAccountService.updateMentorPassword(req.user, updateMenteePasswordDto)
    }
}
