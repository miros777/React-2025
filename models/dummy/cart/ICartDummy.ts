import type {IProductCart} from "./IProductCart.ts";

export interface ICartDummy {
    id: number,
    products: IProductCart[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}
