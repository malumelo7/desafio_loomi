import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../controllers/ProductController";

const router = Router()

router.get('/', getAllProducts)
router.post('/', createProduct)
router.delete('/', deleteProduct)
router.put('/', updateProduct)

module.exports = router