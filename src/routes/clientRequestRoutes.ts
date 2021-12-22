import { Router } from "express";
import { checkUserCredencials } from "../controllers/authPasswordController";
import { createClientRequest, deleteClientRequest, getAllClientsRequests, updateClientRequest } from "../controllers/ClientRequestController";

const router = Router()

router.get('/', getAllClientsRequests, checkUserCredencials)
router.post('/', createClientRequest, checkUserCredencials)
router.delete('/', deleteClientRequest, checkUserCredencials)
router.put('/', updateClientRequest, checkUserCredencials)

module.exports = router
