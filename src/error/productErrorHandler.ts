import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient()

const checkValidProduct = async (id) => {
    const product = await prisma.product.count({
        where: {
            id: id
        }
    })

    if(product > 0) {
        return true
    }

    else {
        return false
    }
}