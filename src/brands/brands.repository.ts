import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Brand, BrandDocument } from "./schemas/brand.schema";

@Injectable()
export class BrandsRepository {
    constructor(@InjectModel(Brand.name) private brandModel: Model<BrandDocument>) {}

    async findOne(brandFilterQuery: FilterQuery<Brand>): Promise<Brand> {
        return this.brandModel.findOne(brandFilterQuery);
    }

    async find(brandFilterQuery: FilterQuery<Brand>): Promise<Brand[]> {
        return this.brandModel.find(brandFilterQuery)
    }

    async create(brand: Brand): Promise<Brand> {
        const newUser = new this.brandModel(brand);
        return newUser.save()
    }

    async findOneAndUpdate(brandFilterQuery: FilterQuery<Brand>, brand: Partial<Brand>): Promise<Brand> {
        return this.brandModel.findOneAndUpdate(brandFilterQuery, brand, { new: true });
    }

    async createBrand(brand) {
        const newBrand = new this.brandModel(brand)
        return newBrand.save()  
    }
}