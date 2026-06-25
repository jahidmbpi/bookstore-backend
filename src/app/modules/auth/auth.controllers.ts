import { StatusCodes } from "http-status-codes";
import sendResponse from "../../sheard/sendResponse";
import type { Request, Response } from "express";
import catchAsync from "../../sheard/catchAsync";
import { authServices } from "./auth.services";

const logIn = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await authServices.logIn(res, payload);
  console.log(result);

  sendResponse(res, {
    success: true,
    message: "user login successfully",
    statusCode: StatusCodes.OK,
    data: result,
  });
});

export const authcontroller = {
  logIn,
};
