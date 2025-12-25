import type {IProduct} from "./IProduct";

export  interface IProductsResponse {
 products: IProduct[];
    total: number,
    skip: number,
    limit: number
}

export interface Dimensions {
  width?: number;
  height?: number;
  depth?: number;
}

export interface Meta {
  createdAt?: string;
  updatedAt?: string;
  barcode?: string;
  qrCode?: string;
}

export interface Reviews {
  rating?: number;
  comment?: string;
  date?: string;
  reviewerName?: string;
  reviewerEmail?: string;
}