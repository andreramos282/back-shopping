import ProductType from "../types/Product.type";
import ProductModel from "../model/Product.model";
import ProductToUpdate from "../types/ProductToUpdate.type";

class ProductService {
    async create(product: ProductType) {
        const newProduct = new ProductModel({
            name: product.name,
            price: product.price
        });
        const savedProduct = await newProduct.save();
        return savedProduct;
    }

    async readAll() {
        const products = await ProductModel.find();
        return { products };
    }

    async read(id: string) {
        const product = await ProductModel.findById(id);
        return { product };
    }

    async update(id: string, newProduct: ProductToUpdate) {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, newProduct, { new: true });
        if (!updatedProduct) {
            throw new Error(`Error updating product with id ${id}`);
        }
        return updatedProduct;
    }

    async delete(id: string) {
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            throw new Error(`Error deleting product with id ${id}`);
        }
        return deletedProduct;
    }
}

export default ProductService;
