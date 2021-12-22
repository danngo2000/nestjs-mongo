import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBrandDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  slug: string

  @IsString()
  name_lower: string

  @IsString()
  description: string
}