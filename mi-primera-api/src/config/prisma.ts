import { PrismaClient } from "../../../src/generated/prisma"; 

const prisma = new PrismaClient({
  log: ["error", "warn", "query"],
});

export default prisma;
