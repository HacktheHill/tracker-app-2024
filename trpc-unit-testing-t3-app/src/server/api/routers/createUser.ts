import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const createUserRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(z.object({ username: z.string().min(1), firstName: z.string().min(1), lastName: z.string().min(1) }))
    .mutation(({ input }) => {
      return db.user.create({
        data: {
          username: input.username,
          firstName: input.firstName,
          lastName: input.lastName
        }
      })
    }),
});
