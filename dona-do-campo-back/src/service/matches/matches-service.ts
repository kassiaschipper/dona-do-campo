import { notFoundError } from "../../errors/not-found-error.js";
import matchesRepository from "../../repositories/matches-repository.js";

async function getMatches() {
    const matches = await matchesRepository.findMatches();

    if(!matches){
        throw notFoundError();
    };

    return matches;
}

async function postMatchesData(home:string, visitor:string, date:string, time:string, court: string, homeImage:string, visitorImage: string, homeScore:number, visitorScore:number) {
    
    const matchesData = {
        home, 
        visitor,   
        date,
        time,
        court,
        homeImage,
        visitorImage,
        visitorScore,
        homeScore

    };

    const insertMatches = await matchesRepository.insertMatchesData(matchesData);

    return insertMatches;
 }


async function putMatchScore(matchId:number, homeScore:number, visitorScore:number) {
    
   const findMatchId = await matchesRepository.findMatchById(matchId);
   
   if(!findMatchId){
    throw notFoundError();
   };
  
    const insertResult = await matchesRepository.updateMatchResult(matchId, homeScore, visitorScore);

    return insertResult;
 }

const matchesService = {
    getMatches,   
    postMatchesData,
    putMatchScore,
};

export default matchesService;