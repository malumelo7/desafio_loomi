import { Router } from "express";
import { getAllClients } from "../controllers/ClientController";

const router = Router()

router.get('/client', getAllClients)