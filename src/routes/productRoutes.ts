import { Router } from "express";
import { checkUserCredencials } from "../controllers/authPasswordController";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../controllers/ProductController";
import { authenticateToken } from "../middleware/authenticateToken";

const router = Router()

router.get('/', authenticateToken, getAllProducts)
router.post('/', authenticateToken, createProduct)
router.delete('/', authenticateToken, deleteProduct)
router.put('/', authenticateToken, updateProduct)

module.exports = router