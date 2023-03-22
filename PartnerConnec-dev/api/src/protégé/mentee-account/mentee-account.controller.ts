import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateMenteePasswordDto } from './dto/updateMenteePassword.dto';
import { MenteeAccountService } from './mentee-account.service';

@Controller('api/v1/mentee-account')
export class MenteeAccountController {
    constructor(private menteeAccountService: MenteeAccountService) {}

    @Put(':id')
    async updateMenteePassword(
        @Param('id')
        id: string,
        @Body()
        updateMenteePasswordDto: UpdateMenteePasswordDto
    ): Promise<string> {
        return this.menteeAccountService.updateMentorPassword(id, updateMenteePasswordDto)
    }
}
