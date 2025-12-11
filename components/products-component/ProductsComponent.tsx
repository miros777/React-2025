import {useEffect, useState} from "react";
import {getProducts} from "../../services/api.service";
import ProductComponent from "../product-component/ProductComponent.tsx";
import type IProduct from "../../models/IProduct.ts";

const ProductsComponent = () => {

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {

        getProducts().then((products) => {
            setProducts(products);
        })
    })

    return (
        <div className="flex flex-wrap">
            {products.map(product => <ProductComponent key={product.id} product={product} />)}
        </div>
    );
};

export default ProductsComponent;