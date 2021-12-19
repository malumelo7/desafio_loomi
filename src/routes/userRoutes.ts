import { Router } from "express";
import { createUser, deleteUser, getAllUsers, updateUser } from "../controllers/UserController";

const router = Router()

router.get('/', getAllUsers)
router.post('/', createUser)
router.delete('/', deleteUser)
router.put('/', updateUser)

module.exports = router