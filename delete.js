import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

async function main(){
    const result = await prisma.courses.delete({
        where: {
            id: "691f6764-00e7-474a-8548-743ca1ba22a5"
        }
    })

    console.log(result)

}