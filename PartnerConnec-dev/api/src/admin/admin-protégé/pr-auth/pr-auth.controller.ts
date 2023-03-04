import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Req, UseGuards } from '@nestjs/common/decorators';
import { ProtégéSignUpDto } from './dto/protégésignup.dto';
import { PrAuthService } from './pr-auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/pr-auth')
export class PrAuthController {
  constructor(private prAuthService: PrAuthService) {}

  @Post('/signup')
  @UseGuards(AuthGuard())
  @UsePipes(new ValidationPipe())
  parrainSignUp(
    @Body()
    protégéSignUpDto: ProtégéSignUpDto,
    @Req() req,
  ) {
    return this.prAuthService.parrainSingUp(protégéSignUpDto, req.user);
  }

}
