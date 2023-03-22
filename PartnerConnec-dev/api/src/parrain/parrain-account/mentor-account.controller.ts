import { Body, Controller, Param, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UpdatePasswordDto } from './dto/updatePassword.dto';
import { MentorAccountService } from './mentor-account.service';

@Controller('api/v1/mentor/password')
export class MentorAccountController {
    constructor(private mentorAccountService: MentorAccountService) {}

    @Put()
    @UseGuards(AuthGuard())
    async updateMentorPassword(
      @Req() req,
      @Body()
      updatePasswordDto: UpdatePasswordDto,
    ): Promise<string> {
      return this.mentorAccountService.updateMentorPassword(req.user, updatePasswordDto);
    }
}
