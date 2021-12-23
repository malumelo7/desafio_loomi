import { Router } from "express";
import { createClient, deleteClient, getAllClients, updateClient } from "../controllers/ClientController";

const router = Router()

router.get('/', getAllClients)
router.post('/', createClient)
router.delete('/', deleteClient)
router.put('/', updateClient)

module.exports = router