import { NextFunction, Request, Response } from "express";
import { getSamplesServices } from "../services/sample/get-samples.service";

export const getSamplesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getSamplesServices();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};