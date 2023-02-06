import { Request, Response } from "express";
import httpStatus from "http-status";
import userService from "../service/user/user-service.js";


export async function postUser(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
        const user = await userService.createUser({ name, email, password });
        return res.status(httpStatus.CREATED).json({
            id: user.id,
            email: user.email,
        })
    } catch (error) {
        if (error.name === "DuplicatedEmailError") {
            return res.status(httpStatus.CONFLICT).send(error);
        }
        return res.status(httpStatus.BAD_REQUEST);
    }
}