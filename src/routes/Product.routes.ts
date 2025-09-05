import { Router } from "express"
import ProductController from "../controllers/Product.controller"

const productController = new ProductController()
const productRoutes = Router()

productRoutes.get(
    '/product',
    productController.__test__.bind(productController)
)

export default productRoutes