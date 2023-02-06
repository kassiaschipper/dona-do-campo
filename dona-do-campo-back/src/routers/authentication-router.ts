import { singInPost } from "../controllers/authentication-controller.js";
import { validateBody } from "../middlewares/validation-middleware.js";
import { signInSchema } from "../schemas/authentication-schema.js";
import { Router } from "express";

const authenticationRouter = Router();

authenticationRouter
    .get("/", (_req, res) => res.send("ok"))
    .post("/sign-in", validateBody(signInSchema), singInPost);
    

export { authenticationRouter };
