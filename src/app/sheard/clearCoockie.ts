import type { Response } from "express";

export const ClearCoockie = (res: Response) => {
  res.clearCookie("accessTocken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
  res.clearCookie("refreshTocken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
};
