export const metadata = {
    title: "Product",
}
import axios from 'axios'
import Link from 'next/link'
import React from 'react'

type Product = {
    id:number;
    category_id: number;
    name: string;
    price: number;
    stok : string;
    tag : string;
    images : string;

}
const getProduct = async () => {
    const res = await axios.get('http://127.0.0.1:8000/api/product');
    return res.data.data
}
const ProductList = async () => {
    const product : Product[] = await getProduct()
    return (
        <div>
            Product List
            <ul>
                {product.map((product, index ) => (
                    <Link href={'/product/${product}.id}'} key={product.id}>
                        <li>Id Category = {product.category_id}</li>
                        <li>Nama Produk = {product.name}</li>
                        <li>Harga = {product.price}</li>
                        <li>Stok = {product.stok}</li>
                        <li>Nama Foto = {product.images}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}
;
export default ProductList