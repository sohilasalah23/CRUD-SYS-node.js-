import { productModel } from "../../../Database/models/product.model.js"

/*  A D D     P R O D U C T*/
export const addProduct = async (req, res) => {
    let { productName, Price, Model, Description } = req.body
    let foundedproduct = await productModel.findOne({ productName })
    if (foundedproduct) return res.json({ message: "product already found", foundedproduct })
    let addedProduct = await productModel.insertMany(req.body)
    res.status(201).json({ message: "Done ", addedProduct })
}
/*   G E T   A L L     P R O D U C T*/
export const allProduct = async (req, res) => {
    let Product = await productModel.find()
    Product && res.json({ message: "done", Product })
    !Product && res.json({ message: "not found Product" })
}
/*   D E L E T E   P R O D U C T*/
export const deleteProduct = async (req, res) => {
    let deletedProduct = await productModel.findByIdAndDelete(req.params.id)
    deletedProduct && res.json({ message: "deleted", deletedProduct })
    !deletedProduct && res.json({ message: "product not founded" })
}
/*   U P D A T E    P R O D U C T*/
export const updateProduct = async (req, res) => {
    let updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    updatedProduct && res.json({ message: "updated", updatedProduct })
    !updatedProduct && res.json({ message: "not found Product" })
}
/*  S E A R C H     P R O D U C T*/
export const searchProduct = async (req, res) => {
    if (req.query.keyword) {
        let foundedProduct = await productModel.find({ productName: { $regex: req.query.keyword, $options: "i" } })
        foundedProduct && res.json({ message: "founded", foundedProduct })
        !foundedProduct && res.json({ message: "not found Product" })
    }
}
