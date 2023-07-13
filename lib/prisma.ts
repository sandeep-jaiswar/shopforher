import { PrismaClient } from "@prisma/client";

class PrismaSingleton {
  private static instance: PrismaClient | null = null;

  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): PrismaClient {
    if (!PrismaSingleton.instance) {
      PrismaSingleton.instance = new PrismaClient({
        log: ["query"],
      });
    }

    return PrismaSingleton.instance;
  }
}

// Usage
export const prisma = PrismaSingleton.getInstance();
