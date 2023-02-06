import { prisma } from "../config/database.js";
import { Prisma } from "@prisma/client";


async function findByEmail(email: string, select?: Prisma.usersSelect ) {
    const params: Prisma.usersFindUniqueArgs = {
      where: {
        email,
      },
    };
  
    if (select) {
      params.select = select;
    }
  
    return prisma.users.findUnique(params);
}

async function create(data: Prisma.usersUncheckedCreateInput) {
    return prisma.users.create({
      data,
    });
  }

const userRepository = {
    findByEmail,
    create,
  };
  
export default userRepository;