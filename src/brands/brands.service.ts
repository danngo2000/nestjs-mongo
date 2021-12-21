import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateBrandDto } from "./dto/update-brand.dto";

import { Brand } from "./schemas/brand.schema";
import { BrandsRepository } from "./brands.repository";

@Injectable()
export class BrandsService {
    constructor(private readonly brandsRepository: BrandsRepository) {}

    async getBrandById(id: string): Promise<Brand> {
        return this.brandsRepository.findOne({ id })
    }

    async getBrands(): Promise<Brand[]> {
        return this.brandsRepository.find({});
    }

    async createBrand(name: string): Promise<Brand> {
        return this.brandsRepository.create({ name })
    }

    async updateBrand(id: string, brandUpdates: UpdateBrandDto): Promise<Brand> {
        return this.brandsRepository.findOneAndUpdate({ id }, brandUpdates);
    }
}