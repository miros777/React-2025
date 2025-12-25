import {getAuthData, refreshToken} from "../services/api.services.ts";
import {useEffect, useState} from "react";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductsResponse} from "../models/IProductsResponse.ts";

const AuthDataPage = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        getAuthData<IProductsResponse>().then(value => setProducts(value.products))
             .catch(reason => {
                 console.log(reason);

                 refreshToken()
                 .then(() => getAuthData<IProductsResponse>())
                 .then(value => setProducts(value.products))
         })

    },[])
    return (
        <div>
            Auth Data
            {products.map(product => <div key={product.id}>{product.id} {product.title}<hr/></div>)}
        </div>
    );
};

export default AuthDataPage;