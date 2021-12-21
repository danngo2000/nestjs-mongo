import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Brand, BrandSchema } from "./schemas/brand.schema";
import { BrandsController } from "./brands.controller";
import { BrandsRepository } from "./brands.repository";
import { BrandsService } from "./brands.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Brand.name, schema: BrandSchema }])],
    controllers: [BrandsController],
    providers: [BrandsService, BrandsRepository]
})
export class BrandsModule {}