import { Controller, Get, Put, Body, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @ApiOkResponse({ description: 'Current user profile.' })
  getProfile(@Req() req) {
    return this.userService.findOne(req.user.id);
  }

  @Put('me')
  @ApiOkResponse({ description: 'Profile updated.' })
  updateProfile(@Req() req, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(req.user.id, updateUserDto);
  }
}
