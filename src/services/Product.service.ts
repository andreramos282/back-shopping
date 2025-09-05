import ProductType from "../types/Product.type";
import ProductModel from "../model/Product.model"
import ProductToUpdate from "../types/ProductToUpdate.type";

class ProductService {
    async create(product: ProductType) {
        const newProduct = new ProductModel({
            name: product.name,
            price: product.price
        })
        return await newProduct.save()
    }

    async readAll() {
        const limit = 10
        const products = await ProductModel.find().sort({ createdAt: -1 }).limit(limit)
        return { products: products }
    }

    async read(name: string) {
        const limit = 10
        const products = await ProductModel.find({ name: name }).sort({ createdAt: -1 }).limit(limit)
        return { products: products }
    }

    async update(id: string, newProduct: ProductToUpdate) {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, newProduct)
        if (!updatedProduct) {
            throw new Error("Error in update product")
        }
        return updatedProduct
    }

    async delete(id: string) {
        const deletedProduct = await ProductModel.findByIdAndDelete(id)
        if (!deletedProduct) {
            throw new Error("Error in delete product")
        }
        return deletedProduct
    }
}

export default ProductService