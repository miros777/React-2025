import type {FC} from "react";
import type IProduct from "../../models/IProduct.ts";

type PropsProduct = {
    product: IProduct
}
const ProductComponent: FC<PropsProduct> = ({product: {description, price, images, title}}) => {
    return (
        <div className="bg-indigo-300 text-black p-6 m-2 w-80">
            <div className="font-bold">{title}</div>
            <div className="italic text-red-600">{description}</div>
            <div className="flex fl">
                <div>Price: {price} USD</div>
                <div><img src={images[0]} alt={title}/></div>
            </div>
        </div>
    );
};

export default ProductComponent;