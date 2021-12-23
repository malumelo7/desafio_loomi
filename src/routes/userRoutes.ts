import { Router } from "express";
import { checkUserCredencials } from "../controllers/authPasswordController";
import { createUser, deleteUser, getAllUsers, updateUser } from "../controllers/UserController";
import { authenticateToken } from "../middleware/authenticateToken";

const router = Router()

router.get('/', getAllUsers)

router.delete('/', authenticateToken, deleteUser)
router.put('/', authenticateToken, updateUser)

module.exports = router