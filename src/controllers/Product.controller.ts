import { Request, Response } from "express";
import getErrorMessage from "../utils/getErrorMessage";
import ProductService from "../services/Product.service";

class ProductController {
    private productService: ProductService

    constructor() {
        this.productService = new ProductService()
    }

    async __test__(_: Request, res: Response) {
        try {
            res.status(200)
        } catch (error: unknown) {
            const errorMessage = getErrorMessage(error)
            res.status(500).json({ message: errorMessage })
        }
    }
}

export default ProductController