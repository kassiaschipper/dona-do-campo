import { Router } from "express";
import { authenticateToken } from "../middlewares/authentication-middleware.js";
import { getNews,postNews } from "../controllers/news-controller.js";
import { validateBody } from "../middlewares/validation-middleware.js";
import { newsSchema } from "../schemas/news-schema.js";

const newsRouter = Router();

newsRouter
    .get("/", getNews)
    .all("/*", authenticateToken)
    //.post("/", validateBody(newsSchema), postNews);
    .post("/", postNews);

export { newsRouter };