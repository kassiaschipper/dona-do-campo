import { CreateMatchesParams } from "../repositories/matches-repository.js"
import Joi from "joi";
import JoiDateFactory from "@joi/date";

const joiDate = Joi.extend(JoiDateFactory);

export const matcheSchema = Joi.object<CreateMatchesParams>({
  home: Joi.string().required(),
  visitor: Joi.string().required(),
  date: joiDate.date().format("YYYY-MM-DD"),
  time: Joi.string().pattern(new RegExp("^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$")).required(),
  court: Joi.string().required(),
  homeImage: Joi.string(),
  visitorImage: Joi.string(),
});

