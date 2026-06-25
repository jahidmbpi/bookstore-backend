import dotenv from "dotenv";
dotenv.config();
const loadEnvVariable = () => {
    const requireVariable = [
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
        PORT: process.env.PORT,
        FRONTEND_URL: process.env.FRONTEND_URL,
        NODE_ENV: process.env.NODE_ENV,
        DATABASE_URL: process.env.DATABASE_URL,
    };
};
export const envVars = loadEnvVariable();
//# sourceMappingURL=env.js.map