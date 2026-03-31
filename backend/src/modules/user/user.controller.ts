import { Controller, Get, Put, Body, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserAuthGuard } from '../auth/user-auth.guard';

@ApiTags('Users')
@UseGuards(UserAuthGuard)
@ApiBearerAuth()
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
