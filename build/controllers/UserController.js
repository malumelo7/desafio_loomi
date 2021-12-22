"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.createUser = exports.getAllUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllUsers = async (req, res) => {
    const allUsers = await prisma.user.findMany();
    res.status(200).send(allUsers);
    return;
};
exports.getAllUsers = getAllUsers;
const createUser = async (req, res) => {
    const { email, password } = req.body;
    const newUser = await prisma.user.create({
        data: {
            email: email,
            password: password
        }
    });
    res.status(200).send(newUser);
    return;
};
exports.createUser = createUser;
const deleteUser = async (req, res) => {
    const { id } = req.body;
    const deletedUser = await prisma.user.delete({
        where: {
            id: id
        }
    });
    res.status(200).send(deletedUser);
    return;
};
exports.deleteUser = deleteUser;
const updateUser = async (req, res) => {
    const { id, email, password } = req.body;
    const updatedUser = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            email: email,
            password: password
        }
    });
    res.status(200).send(updatedUser);
    return;
};
exports.updateUser = updateUser;
