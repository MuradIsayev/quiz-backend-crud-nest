import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  firstname?: string;

  @IsOptional()
  lastname?: string;

  @IsOptional()
  date_of_birth?: Date;
}