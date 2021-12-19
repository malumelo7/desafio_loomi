import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllClients = async (req, res) => {
    const allClients = await prisma.client.findMany()
    res.status(200).send(allClients)
    return
}

export const createClient = async (req, res) => {
    const {name, email, phone, adress} = req.body

    const newClient = await prisma.client.create({
        data:{
            name: name,
            email: email,
            phone: phone,
            adress: adress,
        }
        
    })
    res.status(200).send(newClient);
    return
}

export const deleteClient = async (req, res) => {
    const { id } = req.body

    const deletedClient = await prisma.client.delete({
        where:{
            id: id
        }
    })
    res.status(200).send(deletedClient)
    return
}

export const updateClient = async (req, res) => {
    const { id, name, email, phone, adress } = req.body
    const updatedClient = await prisma.client.update({
        where:{
            id: id
        },
        data: {
            name: name,
            email: email,
            phone: phone,
            adress: adress
        }
    })
    res.status(200).send(updatedClient)
    return
}

