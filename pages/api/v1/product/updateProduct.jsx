import SchemaProducts from "../../modal/productModal/SchemaProduct";
import connectDatabase from "../../utils/bd";

const UpdateProduct = async (req, res) => {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await connectDatabase();
    const { id } = req.query;
    const updatedProductData = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(id, updatedProductData, {
      new: true
    });

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json({ message:'updated', updatedProduct });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};

export default UpdateProduct;