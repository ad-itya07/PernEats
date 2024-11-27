import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createNewUser = async (userData : any) => {
    const newUser = await prisma.user.create({
        data: userData,
    });

    return newUser;
};

export const userExists = async (email : string) => {
  const user = await prisma.user.findUnique({
    where: {
        email: email,
    }
  });

  return user;
};
