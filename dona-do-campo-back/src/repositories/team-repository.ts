import { team } from "@prisma/client";
import { prisma } from "../config/database.js";

async function findTeam(): Promise<team[]> {
    return prisma.team.findMany();
}

async function insertTeamPlayer(team: CreateTeamParams): Promise<team> {
    return prisma.team.create({
        data: {
            ...team
        }
    })
}

export type CreateTeamParams = Omit<team, "id" >

const newsRepository = {
    findTeam, 
    insertTeamPlayer,
};

export default newsRepository;
