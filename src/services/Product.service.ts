import ProductType from "../types/Product.type";
import ProductModel from "../model/Product.model"

class ProductService {
    async create(product: ProductType) {
        const newProduct = new ProductModel({
            name: product.name,
            price: product.price
        })
        return await newProduct.save()
    }

    async __test__() {
        return await ProductModel.find()
    }
}

export default ProductService