"use server"
import { db } from "@/lib/db";
import { ProgressSchema } from "@/schemas/progress";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

export async function CreateProgress(values: z.infer<typeof ProgressSchema>) {
    try {
        const validatedFields = ProgressSchema.parse(values);

        if (!validatedFields) {
            throw new Error("Error Occurred during validation");
        }

        const { date, mobility, speech, strength, dailyActivities } = validatedFields;

        const clerkId = await auth().userId || '';

        const user = await db.user.findUnique({
            where: {
                clerkId: clerkId
            },
            select: {
                id: true
            }
        });

        if (!user) {
            throw new Error("User not found");
        }

        await db.progressInfo.create({
            data: {
                date : date,
                mobility: mobility,
                speech: speech,
                strength: strength,
                dailyActivities: dailyActivities,
                userId: user.id
            }
        });

        return { success: "Progress Info Created Successfully" };
    } catch (error) {
        console.error("Error creating progress info:", error);
        return { error: "Error Occurred while creating progress info" };
    }
}
