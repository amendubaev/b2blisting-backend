import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsOptional()
  @ApiPropertyOptional()
  @IsString()
  content?: string;

  @ApiProperty()
  @IsOptional()
  @ApiPropertyOptional()
  @IsNumber()
  thumbnail?: string;
}
