import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de Prisma",
            duration: 100,
            description: "Curso de  ORM Prisma. Massa pra caralho!"
        }
    })
            
    console.log(result);
}

main()