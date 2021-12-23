import { Router } from "express";
import { createClientRequest, deleteClientRequest, getAllClientsRequests, updateClientRequest } from "../controllers/ClientRequestController";

const router = Router()

router.get('/', getAllClientsRequests)
router.post('/', createClientRequest)
router.delete('/', deleteClientRequest)
router.put('/', updateClientRequest)

module.exports = router
