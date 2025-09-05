import { Request, Response } from "express";
import getErrorMessage from "../utils/getErrorMessage";
import ProductService from "../services/Product.service";
import ProductType from "../types/Product.type";

class ProductController {
    private productService: ProductService

    constructor() {
        this.productService = new ProductService()
    }

    async insertProduct(req: Request, res: Response) {
        try {
            const { name, price } = req.body
            if (!name || !price) {
                res.status(400).json({ message: "name and price is required" })
                return
            }
            await this.productService.create({ name: name, price: price })
            res.status(200).json({ message: "product successfully created" })
        } catch (error: unknown) {
            const errorMessage = getErrorMessage(error)
            res.status(500).json({ message: errorMessage })
        }
    }

    async getProducts(_: Request, res: Response) {
        try {
            const response = await this.productService.readAll()
            res.status(200).json(response)
        } catch (error: unknown) {
            const errorMessage = getErrorMessage(error)
            res.status(500).json({ message: errorMessage })
        }
    }

    async getProduct(req: Request, res: Response) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: "params ID is required" })
                return
            }
            const response = await this.productService.read(id)
            res.status(200).json(response)
        } catch (error: unknown) {
            const errorMessage = getErrorMessage(error)
            res.status(500).json({ message: errorMessage })
        }
    }

    async updateProduct(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { name, price } = req.body
            if (!id) {
                res.status(400).json({ message: "params ID is required" })
                return
            }
            await this.productService.update(id, { name: name, price: price })
            res.status(200).json({ message: "product updated successfully" })
        } catch (error: unknown) {
            const errorMessage = getErrorMessage(error)
            res.status(500).json({ message: errorMessage })
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: "params ID is required" })
                return
            }
            await this.productService.delete(id)
            res.status(200).json({ message: "product deleted successfully" })
        } catch (error: unknown) {
            const errorMessage = getErrorMessage(error)
            res.status(500).json({ message: errorMessage })
        }
    }

    async __test__(_: Request, res: Response) {
        try {
            res.status(200).json({ message: "funcionando!" })
        } catch (error: unknown) {
            const errorMessage = getErrorMessage(error)
            res.status(500).json({ message: errorMessage })
        }
    }
}

export default ProductController