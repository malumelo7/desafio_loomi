"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.deleteProduct = exports.createProduct = exports.getAllProducts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllProducts = async (req, res) => {
    const allProducts = await prisma.product.findMany();
    res.status(200).send(allProducts);
    return;
};
exports.getAllProducts = getAllProducts;
const createProduct = async (req, res) => {
    const { name, price, description } = req.body;
    const newProduct = await prisma.product.create({
        data: {
            name: name,
            price: price,
            description: description,
        }
    });
    res.status(200).send(newProduct);
    return;
};
exports.createProduct = createProduct;
const deleteProduct = async (req, res) => {
    const { id } = req.body;
    const deletedProduct = await prisma.product.delete({
        where: {
            id: id
        }
    });
    res.status(200).send(deletedProduct);
    return;
};
exports.deleteProduct = deleteProduct;
const updateProduct = async (req, res) => {
    const { id, name, price, description } = req.body;
    const updatedProduct = await prisma.product.update({
        where: {
            id: id
        },
        data: {
            name: name,
            price: price,
            description: description,
        }
    });
    res.status(200).send(updatedProduct);
    return;
};
exports.updateProduct = updateProduct;
