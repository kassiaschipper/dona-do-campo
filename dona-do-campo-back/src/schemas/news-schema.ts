import { CreateNewsParams } from "../repositories/news-repository.js"
import Joi from "joi";
import JoiDateFactory from "@joi/date";

const joiDate = Joi.extend(JoiDateFactory);

export const newsSchema = Joi.object<CreateNewsParams>({
  title: Joi.string().required(),
  content: Joi.string().required(),
  createAt: joiDate.date().format("YYYY-MM-DD hh:mm")
});

