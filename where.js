import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()


async function main(){
    const courses = await prisma.courses.findMany({
        where: {
            id: {
                equals: "0957756d-b752-4c39-b76a-6a5b470890eb"
            }
        }
    })
    console.log(courses)
}


main()