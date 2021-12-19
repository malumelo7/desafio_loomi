import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export const getAllProducts = async (req, res) => {
    const allProducts = await prisma.product.findMany()
    res.status(200).send(allProducts)
    return
}

export const createProduct = async (req, res) => {
    const {name, price, description, clientRequestId} = req.body
    const newProduct = await prisma.product.create({
        data:{
            name: name,
            price: price,
            description: description,
            clientRequestId: clientRequestId
        }
    })

    res.status(200).send(newProduct);
    return
}

export const deleteProduct = async (req, res) => {
    const { id } = req.body

    const deletedProduct = await prisma.product.delete({
        where:{
            id: id
        }
    })
    res.status(200).send(deletedProduct)
    return
}

export const updateProduct = async (req, res) => {
    const { id, name, price, description } = req.body
    const updatedProduct = await prisma.product.update({
        where:{
            id: id
        },
        data: {
            name: name,
            price: price,
            description: description,
        }
    })
    res.status(200).send(updatedProduct)
    return
}
