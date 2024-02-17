import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(email: string, password: string, firstName: string, lastName: string, countryCode: string) {
    const res = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName,
            countryCode
        }, 
        select: {
            id: true,
            password: true,
            lastName: true
            
        }
    })
    console.log(res); 
}

insertUser("try@gmail.com", "try", "try", "try", "+91");