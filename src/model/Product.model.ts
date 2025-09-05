import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    price: { type: Number, required: true }
})

const Product = mongoose.model("product", ProductSchema)

export default Product