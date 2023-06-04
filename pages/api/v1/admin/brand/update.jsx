import SchemaBrand from "../../../modal/productModal/SchemaBrand";
import connectDatabase from "../../../utils/bd";
const UpdateBrand = async (req, res) => {
    try {
        await connectDatabase()
        const data = req.body;
        let result;
        if (data) {
            result = await SchemaBrand.updateMany({ _id: data?.id }, { $set: data }, {
                runValidators: true,
            })
        }
        if (result) {
            return res.status(200).json(result)
        }
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default UpdateBrand;
