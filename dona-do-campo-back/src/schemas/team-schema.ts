import { CreateTeamParams } from "../repositories/team-repository.js"
import Joi from "joi";

export const teamSchema = Joi.object<CreateTeamParams>({
    name: Joi.string().required(),
    image: Joi.string().required(),
    position: Joi.string().required(),
    comment: Joi.string().required(),
    instagranPage: Joi.string().required(),
    facebookPage: Joi.string(),
    tiktokAccount: Joi.string(),
    twitterAccount:Joi.string(),
});


