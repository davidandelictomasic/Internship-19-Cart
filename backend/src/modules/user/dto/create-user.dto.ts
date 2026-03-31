import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsOptional, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
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

  @ApiProperty({ required: false, example: '123 Main St, City' })
  @IsString()
  @IsOptional()
  address?: string;
}
