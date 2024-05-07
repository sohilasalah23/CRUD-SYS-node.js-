import express from "express"
import { addProduct, allProduct, deleteProduct, searchProduct, updateProduct } from "./product.controller.js"
const productRoutes = express.Router()




/*  A D D     P R O D U C T*/
productRoutes.post("/", addProduct)
/*   G E T   A L L     P R O D U C T*/
productRoutes.get("/", allProduct)
/*   U P D A T E    P R O D U C T*/
productRoutes.patch("/:id", updateProduct)
/*   D E L E T E   P R O D U C T*/
productRoutes.delete("/:id", deleteProduct)
/*  S E A R C H     P R O D U C T*/
productRoutes.get("/search", searchProduct)








export default productRoutes
