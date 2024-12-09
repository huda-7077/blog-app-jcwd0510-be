import { NextFunction, Request, Response } from "express";
import { registerServices } from "../services/auth/register.service";

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await registerServices(req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
