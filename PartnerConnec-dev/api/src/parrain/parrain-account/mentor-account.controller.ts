import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdatePasswordDto } from './dto/updatePassword.dto';
import { MentorAccountService } from './mentor-account.service';

@Controller('api/v1/mentor/password')
export class MentorAccountController {
    constructor(private mentorAccountService: MentorAccountService) {}

    @Put(':id')
    async updateMentorPassword(
      @Param('id')
      id: string,
      @Body()
      updatePasswordDto: UpdatePasswordDto,
    ): Promise<string> {
      return this.mentorAccountService.updateMentorPassword(id, updatePasswordDto);
    }
}
