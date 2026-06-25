import { email } from "zod";
import type { Response } from "express";
import AppError from "../../helper/appError";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/prisma";
import { UserStatus } from "@prisma/client";
import bcrypt from "bcryptjs";
import createUserTocken from "../../sheard/createTocken";
import { setCoockie } from "../../sheard/setCoockie";

const logIn = async (
  res: Response,
  payload: {
    email: string;
    password: string;
  },
) => {
  console.log(payload);

  const isExsitUser = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });
  if (!isExsitUser) {
    throw new AppError(StatusCodes.NOT_FOUND, "user  not found");
  }
  if (!isExsitUser.password) {
    throw new AppError(404, "password missing");
  }
  if (isExsitUser.isDeleted) {
    throw new AppError(404, "password missing");
  }
  const matchPassword = await bcrypt.compare(
    payload.password,
    isExsitUser?.password,
  );
  if (matchPassword === false) {
    throw new AppError(404, "invalid password, plase provide valid password");
  }
  if (isExsitUser.status === UserStatus.BLOCK) {
    throw new AppError(403, "Your account is blocked");
  }

  if (isExsitUser.status === UserStatus.INACTIVE) {
    throw new AppError(403, "Your account is inactive");
  }
  const tockenInfo = createUserTocken(isExsitUser);
  console.log(tockenInfo);
  setCoockie(res, tockenInfo);
  return {
    message: "user login successfully",
  };
};

export const authServices = {
  logIn,
};
