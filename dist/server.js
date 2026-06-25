import { Server } from "http";
import app from "./app";
import { envVars } from "./app/config/env";
import { prisma } from "./app/config/prisma";
let server;
const startServer = async () => {
    try {
        server = app.listen(envVars.PORT, () => {
            console.log(`🚀 Server running at http://localhost:${envVars.PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
const testConnect = async () => {
    try {
        await prisma.$connect();
        console.log("✅ Database Connected Successfully");
    }
    catch (error) {
        console.error("❌ Database Connection Failed:", error);
    }
};
(async () => {
    await startServer();
    await testConnect();
})();
//# sourceMappingURL=server.js.map