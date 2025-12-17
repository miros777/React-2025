import type {IProductCart} from "../../models/dummy/cart/IProductCart.ts";

type Props = {
    products: IProductCart[];
};

const CartComponent = ({products}: Props) => {
    return (
        <div>
            {products?.map(obj =>
                <div className="m-6 p-6 w-1/2 bg-teal-300" key={obj.id}>
                    <div>{obj.title}</div>
                    <div>{obj.id}</div>
                    <div className="bg-red-500">{obj.price}</div>
                </div>
            )}
        </div>
    );
};

export default CartComponent;