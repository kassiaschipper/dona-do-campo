import { prisma } from "../config/database.js";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.sessionUncheckedCreateInput) {
  return prisma.session.create({
    data,
  });
}

const sessionRepository = {
  create,
};

export default sessionRepository;