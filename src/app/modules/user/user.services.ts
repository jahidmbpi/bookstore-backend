import { email } from "zod";
import type { Request } from "express";
import { prisma } from "../../config/prisma";
import AppError from "../../helper/appError";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";
const createUser = async (req: Request) => {
  const data = req.body;
  console.log(data);

  const isExsituser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (isExsituser) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      "this user already exist, please login with email and password",
    );
  }
  const plainPassword = data.password;

  const hashedPassword = await bcrypt.hash(plainPassword, 10);
  const userData = {
    ...data,
    password: hashedPassword,
  };

  const result = await prisma.user.create({
    data: userData,
  });
  const { password, ...withOutPassword } = result;

  return withOutPassword;
};

export const userServices = {
  createUser,
};
