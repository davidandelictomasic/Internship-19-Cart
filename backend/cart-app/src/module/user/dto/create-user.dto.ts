import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  @IsDefined()
  email: string;

  @ApiProperty()
  @IsStrongPassword()
  @IsDefined()
  password: string;

  @ApiProperty({ required: false })
  name?: string;
}
