import type {ICartDummy} from "./ICartDummy.ts";

export interface ICartDummyBase {
    total: number,
    skip: number,
    limit: number,
    carts: ICartDummy[]
}