
import { team } from "@prisma/client";
import { Request, Response } from "express";
import httpStatuss from "http-status";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware.js";
import teamService from "../service/team/team-service.js";

export async function getTeam(_req: Request, res: Response) {

   try {
      const team = await teamService.getTeam();
      return res.status(httpStatuss.OK).send(team);
   } catch (error) {
      return res.sendStatus(httpStatuss.NOT_FOUND);
   }
}

export async function insertTeamPlayerData(req: AuthenticatedRequest, res: Response) {
   const { name, image, position, comment, instagranPage, facebookPage, tiktokAccount, twitterAccount } : team = req.body; 

   if(!name || !image || !position || !comment ) {
      return res.sendStatus(httpStatuss.BAD_REQUEST);
   }
   
   try {
      const teamPlayer = await teamService.postTeamPlayer( name, image, position, comment, instagranPage, facebookPage, tiktokAccount, twitterAccount);
      return res.status(httpStatuss.OK).send(teamPlayer);
   } catch (error) {
      console.log(error)
      return res.sendStatus(httpStatuss.INTERNAL_SERVER_ERROR);
   }
}