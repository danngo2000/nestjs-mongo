import { Injectable } from "@nestjs/common";
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

    async createBrand(body: any): Promise<Brand> {
        const { name, slug, name_lower, description } = body
        return this.brandsRepository.create({ name, slug, name_lower, description })
    }

    async updateBrand(id: string, brandUpdates: UpdateBrandDto): Promise<Brand> {
        return this.brandsRepository.findOneAndUpdate({ id }, brandUpdates);
    }
}