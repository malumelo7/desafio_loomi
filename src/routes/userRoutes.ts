import { Router } from "express";
import { checkUserCredencials } from "../controllers/authPasswordController";
import { createUser, deleteUser, getAllUsers, updateUser } from "../controllers/UserController";

const router = Router()

router.get('/', getAllUsers, checkUserCredencials)
router.post('/', createUser)
router.delete('/', deleteUser, checkUserCredencials)
router.put('/', updateUser, checkUserCredencials)

module.exports = router