import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}); //find all products
    res.json({ products });
    
  } catch (error) {
    res.status(500).json({ message: "Server error: ", error: error.message });
  }
};
