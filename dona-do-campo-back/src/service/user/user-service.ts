import bcrypt from "bcrypt";
import userRepository from "../../repositories/user-repository.js";
import { users } from "@prisma/client";
import { duplicatedEmailError } from "../../errors/duplicated-email-error.js";

async function createUser({ name, email, password }: CreateUserParams): Promise<users> {
  
  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
 
  return userRepository.create({
    name,
    email,
    password: hashedPassword,
  });
}

async function validateUniqueEmailOrFail(email: string) {
  
  const userWithSameEmail = await userRepository.findByEmail(email);
  
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

export type CreateUserParams = Pick<users, "name" | "email" | "password">;

const userService = {
    createUser,
};

export default userService;

