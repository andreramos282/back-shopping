import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const URI_MONGO = process.env.URI_MONGO || ""
const PORT = 3001

mongoose.connect(URI_MONGO)
    .then(() => console.log("🟢 Conectado ao MONGODB com sucesso!"))
    .catch((err: unknown) => console.error("🔴 Erro ao conectar:", err));

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server rodando em http://0.0.0.0:${PORT}`);
});