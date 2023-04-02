import { Body, Controller, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UpdateAdminPasswordService } from './update-admin-password.service';
import { UpdateAdminPassdDto } from './dto/updateAdminPass.dto';

@Controller('api/v1/update-admin-password')
export class UpdateAdminPasswordController {
    constructor(private updateAdminPasswordService: UpdateAdminPasswordService) {}

    @Put()
    @UseGuards(AuthGuard())
    async updateMentorPassword(
      @Req() req,
      @Body()
      updateAdminPassdDto: UpdateAdminPassdDto,
    ): Promise<string> {
      return this.updateAdminPasswordService.updateAdminPassword(req.user, updateAdminPassdDto)
    }
}
