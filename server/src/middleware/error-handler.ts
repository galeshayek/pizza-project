import { ErrorRequestHandler } from "express";
import { MongoServerError } from "mongodb";
import pizzaError from "../errors/pizzaError";
import { MongooseError } from "mongoose";
import { Logger } from "../logs/logger";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof pizzaError) {
    return res.status(err.status).json(err);
  }


  if (err instanceof SyntaxError) {
    return res.status(400).json({ type: err.name, message: err.message, stack: err.stack });
  }
  if (err instanceof TypeError) {
    return res.status(400).json({ type: err.name, message: err.message, stack: err.stack });
  }

  if (err instanceof MongoServerError && err.code === 11000) {
    return res.status(400).json({
      message: "duplicate key - must be unique",
      value: err.keyValue,
    });
  }

  if (err instanceof MongooseError) {
    Logger.log(err)
    return res.status(400).json({ type: 'Mongoose error', message: err.message })
  }

  //internal server error
  return res.status(500).json(err);
};

export default errorHandler;
