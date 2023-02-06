import { users } from "@prisma/client";
import bcrypt from "bcrypt";
import { exclude } from "../../utils/prisma-utils.js";
import userRepository from "../../repositories/user-repository.js";
import { invalidCredentialsError } from "./errors.js"
import sessionRepository from "../../repositories/session-repository.js";
import jwt from "jsonwebtoken";

async function signIn(params: SignInParams): Promise<SignInResult> {
    const { email, password } = params;
  
    const user = await getUserOrFail(email);
  
    await validatePasswordOrFail(password, user.password);
  
    const token = await createSession(user.id);
  
    return {
      user: exclude(user, "password"),
      token,
    };
}

async function getUserOrFail(email: string): Promise<GetUserOrFailResult> {
    const user = await userRepository.findByEmail(email, { id: true, email: true, password: true });
    if (!user) throw invalidCredentialsError();
  
    return user;
}

async function createSession(userId: number) {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    await sessionRepository.create({
      token,
      userId,
    });
  
    return token;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
    const isPasswordValid = await bcrypt.compare(password, userPassword);
    if (!isPasswordValid) throw invalidCredentialsError();
}

export type SignInParams = Pick<users, "email" | "password">;

type SignInResult = {
    user: Pick<users, "id" | "email">;
    token: string;
};

type GetUserOrFailResult = Pick<users, "id" | "email" | "password">;

const authenticationService = {
    signIn,
};
  
export default authenticationService;