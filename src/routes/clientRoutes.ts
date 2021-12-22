import { Router } from "express";
import { checkUserCredencials } from "../controllers/authPasswordController";
import { createClient, deleteClient, getAllClients, updateClient } from "../controllers/ClientController";

const router = Router()

router.get('/', getAllClients, checkUserCredencials)
router.post('/', createClient, checkUserCredencials)
router.delete('/', deleteClient, checkUserCredencials)
router.put('/', updateClient, checkUserCredencials)

module.exports = router