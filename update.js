import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const result = await prisma.courses.update({
        where: {
            id: "691f6764-00e7-474a-8548-743ca1ba22a5"
        },
        data:{
            name: "Curso de Prisma.js com Fastify",
            duration: 200,
            description: "Uma aula boa"
        }
    })

    console.log(result)
}

main()