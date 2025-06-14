export function toLightweightProduct(product: any): any {
    return {
        idProduct: product.idProduct,
        name: product.name,
        price: product.price,
        image: product.images?.[0]?.url || '',
        brand: product.brand,
        category: product.category,
        sallerName: product.sallerName,
    };
}