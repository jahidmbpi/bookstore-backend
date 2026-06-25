import type { Request, Response } from "express";
import catchAsync from "../../sheard/catchAsync";
import sendResponse from "../../sheard/sendResponse";
import { StatusCodes } from "http-status-codes";
import { userServices } from "./user.services";
const createuser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.createUser(req);
  console.log(result);

  sendResponse(res, {
    success: true,
    message: "user created successfully",
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

export const userController = {
  createuser,
};
