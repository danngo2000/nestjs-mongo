import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type BrandDocument = Brand & Document;

@Schema()
export class Brand {
    @Prop()
    name: string

    @Prop()
    slug: string

    @Prop()
    name_lower: string

    @Prop()
    description: string
}

export const BrandSchema = SchemaFactory.createForClass(Brand);