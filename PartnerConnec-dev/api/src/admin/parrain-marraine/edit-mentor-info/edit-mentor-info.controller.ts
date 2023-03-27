import { Body, Controller, Param, Put, UseGuards, UsePipes } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AuthGuard } from '@nestjs/passport';
import { EditMentorInfoDto } from './dto/edit-mentor-info.dto';
import { EditMentorInfoService } from './edit-mentor-info.service';

@Controller('api/v1/edit-mentor-info')
export class EditMentorInfoController {
    constructor(private editMentorInfoService: EditMentorInfoService) {}

    @Put(':id')
    @UseGuards(AuthGuard())
    @UsePipes(new ValidationPipe())
    async editMenotInfo(
        @Param('id')
        id: string,
        @Body() 
        editMentorInfoDto: EditMentorInfoDto
    ) {
        return this.editMentorInfoService.editMentorInfo(id, editMentorInfoDto)
    }
}
