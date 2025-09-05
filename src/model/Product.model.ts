import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    price: { type: Number, required: true }
})

const ProductModel = mongoose.model("product", ProductSchema)

export default ProductModel