import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
declare const prisma: PrismaClient<{
    adapter: PrismaPg;
}, never, import("@prisma/client/runtime/client").DefaultArgs>;
export { prisma };
//# sourceMappingURL=prisma.d.ts.map