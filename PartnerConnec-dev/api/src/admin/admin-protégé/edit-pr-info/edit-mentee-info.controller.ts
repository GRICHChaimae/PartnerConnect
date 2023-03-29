import { Body, Controller, Param, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { EditMenteeInfoDto } from './dto/edit-mentee-info.dto';
import { EditMenteeInfoService } from './edit-mentee-info.service';

@Controller('api/v1/edit-mentee-info')
export class EditMenteeInfoController {
    constructor(private editMenteeInfoService: EditMenteeInfoService) {}

    @Put(':id')
    @UseGuards(AuthGuard())
    @UsePipes(new ValidationPipe())
    async editMenteeInfo(
        @Param('id')
        id: string,
        @Body ()
        editMenteeInfoDto: EditMenteeInfoDto 
    ) {
        return this.editMenteeInfoService.editMentorInfo(id, editMenteeInfoDto)
    }
}
