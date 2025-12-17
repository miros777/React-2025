import {useEffect, useState} from "react";
import type {IProductCart} from "../../models/dummy/cart/IProductCart.ts";
import {useParams} from "react-router-dom";
import {cartServicesDummy} from "../../services/api.servises.ts";
import type {ICartDummyBase} from "../../models/dummy/cart/ICartDummyBase.ts";
import CartComponent from "../comments/CartComponent.tsx";

const CartsPage = () => {
    const [products, setProducts] = useState<IProductCart[]>([]);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (!id) return;

        cartServicesDummy.getCarts(id).then((response: ICartDummyBase) => {
            if(response.carts[0] && response.carts[0].products){
                setProducts(response.carts[0].products);
            }
        });
    }, [id]);

    return (
        <>
            <div>Products Cart</div>
            <CartComponent products={products}/>
        </>
    );
};

export default CartsPage;