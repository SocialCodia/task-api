import { Request, Response, NextFunction } from "express";
import Constants from "../utils/constants";

export default (err: any, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || Constants.StatusCode.SERVER_ERROR
    err.message = err.message || Constants.ServerMessage.SERVER_ERROR
    res.status(err.statusCode).json({ status: 0, message: err.message })
}