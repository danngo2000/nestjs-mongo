import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { Brand } from './schemas/brand.schema';
import { BrandsService } from './brands.service';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get(':id')
  async getBrand(@Param('id') id: string): Promise<Brand> {
    return this.brandsService.getBrandById(id);
  }

  @Get()
  async getBrands(): Promise<Brand[]> {
    return this.brandsService.getBrands();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createBrand(@Body() body: CreateBrandDto) {
    console.log("createBrandDto", body);
    return this.brandsService.createBrand(body)
  }

  @Patch(':id')
  async updateBrand(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto): Promise<Brand> {
    return this.brandsService.updateBrand(id, updateBrandDto);
  }
}
