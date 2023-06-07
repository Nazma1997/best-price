import SchemaProducts from "../../modal/productModal/SchemaProduct";
import connectDatabase from "../../utils/bd";

const ProductGet = async (req, res) => {
    try {
        await connectDatabase()
        const result =await SchemaProducts.find()
        return res.status(200).json(result)

    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default ProductGet;