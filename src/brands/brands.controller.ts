import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { UpdateBrandDto } from './dto/update-brand.dto';

import { Brand } from './schemas/brand.schema';
import { BrandsService } from './brands.service';

class BodyDTO {
  readonly name: string
}

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
  async createBrand(@Body() body: BodyDTO): Promise<Brand> {
    console.log("createBrandDto", body);
    return this.brandsService.createBrand(body.name)
  }

  @Patch(':id')
  async updateBrand(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto): Promise<Brand> {
    return this.brandsService.updateBrand(id, updateBrandDto);
  }
}
