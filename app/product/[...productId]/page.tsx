const ProductDetail = ({params} : {params: {productId: string}})=> {
    return <div>Product {params.productId[1]}</div>;
};

export default ProductDetail   