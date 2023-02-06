
import { matches } from "@prisma/client";
import { Request, Response } from "express";
import httpStatuss from "http-status";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware.js";
import { Result } from "../protocols.js";
import matchesService from "../service/matches/matches-service.js";

export async function getMatches(_req: Request, res: Response) {

   try {
      const matches = await matchesService.getMatches();
      return res.status(httpStatuss.OK).send(matches);
   } catch (error) {
      return res.sendStatus(httpStatuss.NOT_FOUND);
   }
}

export async function insertMatchesData(req: AuthenticatedRequest, res: Response) {
   const { home, visitor, date, time, court, homeImage, visitorImage, homeScore, visitorScore } : matches = req.body; 

   if(!home || !visitor || !date || !time || !court) {
      return res.sendStatus(httpStatuss.BAD_REQUEST);
   }
   
  
   try {
      const matches = await matchesService.postMatchesData(home,
         visitor, 
         date, 
         time,court, 
         homeImage, 
         visitorImage, 
         homeScore, 
         visitorScore);

      return res.status(httpStatuss.OK).send(matches);
      
   } catch (error) {
      console.log(error)
      return res.sendStatus(httpStatuss.INTERNAL_SERVER_ERROR);
   }
}

export async function updateScore(req: AuthenticatedRequest, res: Response) {
   const { matchId } = req.params; 
   const { homeScore, visitorScore }: Result = req.body;

   if(!matchId )  {
      return res.sendStatus(httpStatuss.BAD_REQUEST);
   }

   try {
      const score = await matchesService.putMatchScore(Number(matchId), homeScore, visitorScore);
      return res.status(httpStatuss.OK).send(score);
   } catch (error) {
      return res.sendStatus(httpStatuss.NOT_FOUND);
   }

}

// export async function insertResults(req: AuthenticatedRequest, res: Response) {
//    const { matchId } = req.params; 
//    const { homeScore, visitorScore } = req.body as Result;

//    if(!matchId )  {
//       return res.sendStatus(httpStatuss.BAD_REQUEST);
//    }

//    try {
//       const matchWithResult = await matchesService.postMatchResult(Number(matchId), homeScore, visitorScore);
//       return res.status(httpStatuss.OK).send(matchWithResult);

//    } catch (error) {
//       console.log(error)
//       return res.sendStatus(httpStatuss.INTERNAL_SERVER_ERROR);
//    }
// }