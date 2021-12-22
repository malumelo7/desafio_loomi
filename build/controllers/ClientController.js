"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClient = exports.deleteClient = exports.createClient = exports.getAllClients = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllClients = async (req, res) => {
    const allClients = await prisma.client.findMany();
    res.status(200).send(allClients);
    return;
};
exports.getAllClients = getAllClients;
const createClient = async (req, res) => {
    const { name, email, phone, adress } = req.body;
    const newClient = await prisma.client.create({
        data: {
            name: name,
            email: email,
            phone: phone,
            adress: adress,
        }
    });
    res.status(200).send(newClient);
    return;
};
exports.createClient = createClient;
const deleteClient = async (req, res) => {
    const { id } = req.body;
    const deletedClient = await prisma.client.delete({
        where: {
            id: id
        }
    });
    res.status(200).send(deletedClient);
    return;
};
exports.deleteClient = deleteClient;
const updateClient = async (req, res) => {
    const { id, name, email, phone, adress } = req.body;
    const updatedClient = await prisma.client.update({
        where: {
            id: id
        },
        data: {
            name: name,
            email: email,
            phone: phone,
            adress: adress
        }
    });
    res.status(200).send(updatedClient);
    return;
};
exports.updateClient = updateClient;
