import { PrismaClient } from "@prisma/client";
import { genSalt, hash } from "bcrypt"

const prisma = new PrismaClient();

export const getAllUsers = async (req, res) => {
    const allUsers = await prisma.user.findMany()
    res.status(200).send(allUsers)
    return
}

export const createUser = async (req, res) => {
    const {email} = req.body

    const salt = await genSalt()
    const password = await hash(req.body.password, salt)

    const newUser = await prisma.user.create({
        data: {
            email: email,
            password: password
        }
        
    })

    res.status(200).send(newUser);
    return
}

export const deleteUser = async (req, res) => {
    const { id } = req.body

    const deletedUser = await prisma.user.delete({
        where:{
            id: id
        }
    })
    res.status(200).send(deletedUser)
    return
}

export const updateUser = async (req, res) => {
    const { id, email, password } = req.body
    const updatedUser = await prisma.user.update({
        where:{
            id: id
        },
        data: {
            email: email,
            password: password
        }
    })
    res.status(200).send(updatedUser)
    return 
}

