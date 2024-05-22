import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty()
  @IsBoolean()
  active: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  slug: string;
}
// author           User?      @relation(fields: [authorId], references: [id])
// authorId         String?
// Post             Post?      @relation(fields: [postId], references: [id])
// postId           String?
// media            Media?     @relation(fields: [mediaId], references: [id])
// mediaId          String?
// Providers        Providers? @relation(fields: [providersId], references: [id])
// providersId      String?
// parentCategory   Category?  @relation("ChildCategories", fields: [parentCategoryId], references: [id])
// parentCategoryId String?
// childCategories  Category[] @relation("ChildCategories")
