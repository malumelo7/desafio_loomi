"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClientRequest = exports.deleteClientRequest = exports.createClientRequest = exports.getAllClientsRequests = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllClientsRequests = async (req, res) => {
    const allClientsrequests = await prisma.clientRequest.findMany();
    res.status(200).send(allClientsrequests);
    return;
};
exports.getAllClientsRequests = getAllClientsRequests;
const createClientRequest = async (req, res) => {
    const { clientId, products, status } = req.body;
    const newClientRequest = await prisma.clientRequest.create({
        data: {
            clientId: clientId,
            products: products,
            status: status
        }
    });
    res.status(200).send(newClientRequest);
    return;
};
exports.createClientRequest = createClientRequest;
const deleteClientRequest = async (req, res) => {
    const { id } = req.body;
    const deletedClientRequest = await prisma.clientRequest.delete({
        where: {
            id: id
        }
    });
    res.status(200).send(deletedClientRequest);
    return;
};
exports.deleteClientRequest = deleteClientRequest;
const updateClientRequest = async (req, res) => {
    const { id, clientId, products, request_date, status } = req.body;
    const updatedClientRequest = await prisma.clientRequest.update({
        where: {
            id: id
        },
        data: {
            clientId: clientId,
            products: products,
            request_date: request_date,
            status: status
        }
    });
    res.status(200).send(updatedClientRequest);
    return;
};
exports.updateClientRequest = updateClientRequest;
