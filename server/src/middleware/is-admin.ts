import { RequestHandler } from "express";
import pizzaError from "../errors/pizzaError";
import { validateToken } from "./validate-token";

const _isAdmin: RequestHandler = (req, _, next) => {
  if (req.payload?.role >= 1) {
    return next();
  }

  next(new pizzaError(403, "Must be admin"));
};

export const isAdmin = [validateToken, _isAdmin];
