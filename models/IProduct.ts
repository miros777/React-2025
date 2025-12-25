import type {Dimensions, Meta, Reviews} from "./IProductsResponse";

export interface IProduct {
    id?: number;
    title?: string;
    description?: string;
    category?: string;
    price?: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    tags?: string[];
    brand?: string;
    sku?: string;
    weight?: number;
    dimensions?: Dimensions;
    warrantyInformation?: string;
    shippingInformation?: string;
    availabilityStatus?: string;
    reviews?: Reviews[];
    returnPolicy?: string;
    minimumOrderQuantity?: number;
    meta?: Meta;
    thumbnail?: string;
    images?: string[];
}