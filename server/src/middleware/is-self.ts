import { RequestHandler } from "express";
import pizzaError from "../errors/pizzaError";
import { validateToken } from "./validate-token";

const _isSelf: RequestHandler = (req, _, next) => {
    const requestId = req.params.id;
    const isId = req.payload._id;
    if (requestId === isId) return next();
    next(new pizzaError(403, 'can be updated only by the user'))
}

export const isSelf = [validateToken, _isSelf];