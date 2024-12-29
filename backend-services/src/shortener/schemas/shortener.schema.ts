import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ShortenerDocument = HydratedDocument<Shortener>;

export enum SHORTENER_STATUS {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}


@Schema({ timestamps: true })
export class Shortener {
  @Prop({ type: String, required: true, trim: true })
  code: string;

  @Prop({ type: String, required: true, trim: true })
  short: string;

  @Prop({ type: String, required: true, trim: true })
  url: string;

  @Prop({ type: String, required: false, trim: true })
  qr: string;

  @Prop({
    type: String,
    enum: Object.values(SHORTENER_STATUS),
    default: SHORTENER_STATUS.ACTIVE,
  })
  status: string;

  @Prop({ 
    type: Number, 
    required: true, 
    trim: true, 
    default: 0, 
    min: 0 
  })
  clicks: number;
}

export const shortenerSchema = SchemaFactory.createForClass(Shortener);