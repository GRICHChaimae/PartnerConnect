import { Controller, Get } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';

@Controller('parrain')
@Controller('p-auth')
export class PAuthController {
  @Get('ded')
  @UseGuards(AuthGuard())
  test() {
    return console.log('eeeee');
  }
}
