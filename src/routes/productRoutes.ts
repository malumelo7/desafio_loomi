import { Router } from "express";
import { checkUserCredencials } from "../controllers/authPasswordController";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../controllers/ProductController";

const router = Router()

router.get('/', getAllProducts, checkUserCredencials)
router.post('/', createProduct, checkUserCredencials)
router.delete('/', deleteProduct, checkUserCredencials)
router.put('/', updateProduct, checkUserCredencials)

module.exports = router