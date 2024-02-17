import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
        firstName: username
    }
  })
  console.log(user);
}

// for finding all the users in the database use the command below : )

// async function getUser(username: string) {
//     const user = await prisma.user.findMany()
//     console.log(user);
//   }

getUser("Aniket");