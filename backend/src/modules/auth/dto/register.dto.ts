import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsOptional, IsString, IsStrongPassword } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  @IsDefined()
  email: string;

  @ApiProperty({ example: 'StrongPass1!' })
  @IsStrongPassword()
  @IsDefined()
  password: string;

  @ApiProperty({ required: false, example: 'John Doe' })
  @IsString()
  @IsOptional()
  name?: string;
}
