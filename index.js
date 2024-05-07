import * as dotenv from 'dotenv'
dotenv.config()
import express from "express"
import { connection } from './Database/connection.js'
import productRoutes from './src/modules/project Folder/product.routes.js'

const app = express()
const port = 3000
app.use(express.json())
app.use("/api/v1/product", productRoutes)
connection()



app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})