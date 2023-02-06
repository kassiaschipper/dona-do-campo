import { Request, Response } from "express";
import httpStatuss from "http-status";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware.js";
import newsService from "../service/news/news-service.js";
import { news } from "@prisma/client";


export async function getNews(_req: Request, res: Response) {

   try {
      const newsData = await newsService.getNews();
      return res.status(httpStatuss.OK).send(newsData);
   } catch (error) {
      return res.sendStatus(httpStatuss.NOT_FOUND);
   }
}

export async function postNews(req: AuthenticatedRequest, res: Response) {
   const { userId } =  req;
   const { title, content, createAt}:news = req.body; 

   if(!title || !content ) {
      return res.sendStatus(httpStatuss.BAD_REQUEST);
   }
   
   try {
      const news = await newsService.postNews(title, content,createAt);
      return res.status(httpStatuss.OK).send(news);
   } catch (error) {
      console.log(error)
      return res.sendStatus(httpStatuss.INTERNAL_SERVER_ERROR);
   }
}
