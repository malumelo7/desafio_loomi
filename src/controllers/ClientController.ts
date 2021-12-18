import { Mongoose } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const client = require('../models/Client')


export async function getAllClients() {
    const allClients = await client.find()
    return allClients
}

export async function createClient(req, res) {
    const {name, email, phone, adress} = req.body

    const newClient = await client.insertOne({
        name: name,
        email: email,
        phone: phone,
        adress: adress,
    })
    res.status(200).send(newClient);
    return
}
