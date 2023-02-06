import { Router } from "express";
import { authenticateToken } from "../middlewares/authentication-middleware.js";
import { validateBody } from "../middlewares/validation-middleware.js";
import { getMatches, insertMatchesData } from "../controllers/matches-controller.js"
import { matcheSchema } from "../schemas/matches-schema.js"

const matchesRouter = Router();

matchesRouter
    .get("/", getMatches)
    //.get("/results/:matchId", getMatcheWithResult)
    .all("/*", authenticateToken)
    .post("/", validateBody(matcheSchema) ,insertMatchesData);

export { matchesRouter };