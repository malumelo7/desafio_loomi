import { Router } from "express";
import { checkUserCredencials } from "../controllers/authPasswordController";
import { createClient, deleteClient, getAllClients, updateClient } from "../controllers/ClientController";
import { authenticateToken } from "../middleware/authenticateToken";

const router = Router()

router.get('/', authenticateToken, getAllClients)
router.post('/', authenticateToken, createClient)
router.delete('/', authenticateToken, deleteClient)
router.put('/', authenticateToken, updateClient)

module.exports = router