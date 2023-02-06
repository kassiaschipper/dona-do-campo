import { team } from "@prisma/client";
import { notFoundError } from "../../errors/not-found-error.js";
import teamRepository from "../../repositories/team-repository.js";

async function getTeam() {
    const team = await teamRepository.findTeam();

    if (!team) {
        throw notFoundError();
    }
    return team;
}

async function postTeamPlayer(name: string, image: string, position: string, comment: string, instagranPage: string, facebookPage: string, tiktokAccount: string, twitterAccount: string) {

    const playerData = {
        name,
        image,
        position,
        comment,
        instagranPage,
        facebookPage,
        tiktokAccount,
        twitterAccount,
    };

    const insertPalyer = await teamRepository.insertTeamPlayer(playerData);

    return insertPalyer
}

const teamService = {
    getTeam,
    postTeamPlayer,
};

export default teamService;