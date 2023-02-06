import { Router } from "express";
import { postUser } from "../controllers/user-controller.js";

const userRouter = Router();

userRouter
    .post("/", postUser);

export { userRouter };