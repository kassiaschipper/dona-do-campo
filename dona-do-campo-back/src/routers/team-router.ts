import { Router } from "express";
import { authenticateToken } from "../middlewares/authentication-middleware.js";
import { validateBody } from "../middlewares/validation-middleware.js";
import { getTeam, insertTeamPlayerData  } from "../controllers/team-controller.js"
import { teamSchema } from "../schemas/team-schema.js"

const teamRouter = Router();

teamRouter
    .get("/", getTeam)
    .all("/*", authenticateToken)
    .post("/", validateBody(teamSchema), insertTeamPlayerData);

export { teamRouter };