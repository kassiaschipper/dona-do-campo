import { matches  } from "@prisma/client";
import { number } from "joi";
import { prisma } from "../config/database.js";
import { Result } from "../protocols.js"

async function findMatches(): Promise<matches[]> {
    return prisma.matches.findMany();
}

async function insertMatchesData(matches: CreateMatchesParams): Promise<matches> {
    return prisma.matches.create({
        data: {
            ...matches
        }
    });
}

async function findMatchById(matchId: number) {
    return prisma.matches.findMany({
        where: { id: matchId },        
    });
}

async function updateMatchResult(matchId: number, homeScore: number, visitorScore: number) {
    return prisma.matches.update({
        where: {
            id: matchId,
          },
          data: {
            homeScore,
            visitorScore,
          }
    });

}

export type CreateMatchesParams = Omit<matches, "id">

const matchesRepository = {
    findMatches,
    insertMatchesData,
    findMatchById,
    updateMatchResult,
};

export default matchesRepository;