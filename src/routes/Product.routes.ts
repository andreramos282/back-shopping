import { Router } from "express"
import ProductController from "../controllers/Product.controller"

const productController = new ProductController()
const productRoutes = Router()

productRoutes.post(
    '/product',
    productController.insertProduct.bind(productController)
)

productRoutes.get(
    '/product',
    productController.getProducts.bind(productController)
)

productRoutes.get(
    '/',
    productController.__test__.bind(productController)
)

export default productRoutes