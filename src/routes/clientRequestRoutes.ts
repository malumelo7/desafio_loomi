import { Router } from "express";
import { checkUserCredencials } from "../controllers/authPasswordController";
import { createClientRequest, deleteClientRequest, getAllClientsRequests, updateClientRequest } from "../controllers/ClientRequestController";
import { authenticateToken } from "../middleware/authenticateToken";

const router = Router()

router.get('/', authenticateToken, getAllClientsRequests)
router.post('/', authenticateToken, createClientRequest)
router.delete('/', authenticateToken, deleteClientRequest)
router.put('/', authenticateToken, updateClientRequest)

module.exports = router
