import dotenv from "dotenv";
dotenv.config();
interface ENVconfig {
  PORT: string;
  FRONTEND_URL: string;
  NODE_ENV: string;
  DATABASE_URL: string;
  JWT_ACCESS_SECRET: string;
  JWT_ACCESS_EXPIRE: string;
}

const loadEnvVariable = (): ENVconfig => {
  const requireVariable: string[] = [
    "PORT",
    "FRONTEND_URL",
    "NODE_ENV",
    "DATABASE_URL",
  ];
  requireVariable.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`missing environment variable ${key}`);
    }
  });

  return {
    PORT: process.env.PORT as string,
    FRONTEND_URL: process.env.FRONTEND_URL as string,
    NODE_ENV: process.env.NODE_ENV as string,
    DATABASE_URL: process.env.DATABASE_URL as string,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || "",
    JWT_ACCESS_EXPIRE: process.env.JWT_ACCESS_EXPIRE || "",
  };
};
export const envVars = loadEnvVariable();
