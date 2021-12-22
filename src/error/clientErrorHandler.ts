import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient()

export const checkValidName = (name) => {
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/
    return format.test(name)
  }

export const checkValidPhone = (phone) => {
    var re = /^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{5}[-\s\.]?[0-9]{4}$/im;
    return re.test(phone);
}