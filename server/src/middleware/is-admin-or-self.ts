import { RequestHandler } from "express";
import pizzaError from "../errors/pizzaError";
import { validateToken } from "./validate-token";

const _isAdminOrSelf: RequestHandler = (req, _, next) => {
  const requestedId = req.params.id;
  const { _id, role } = req.payload;

  if (requestedId === _id || role >= 1) {
    return next();
  }

  next(new pizzaError(403, "Must be the requested user or admin"));
};

export const isAdminOrSelf = [validateToken, _isAdminOrSelf];