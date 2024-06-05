"use server"
import { db } from "@/lib/db";
import { SuccessStorySchema } from "@/schemas/success-story";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

export const CreateSuccessStory = async (data: z.infer<typeof SuccessStorySchema>) => {
    const validatedFields = SuccessStorySchema.parse(data);

    if (!validatedFields) {
        return {
            error: "Error occured",
        };
    }

    const { VideoUrl, description } = validatedFields;

    const clerkId = await auth().userId || ""

    const user = await db.user.findUnique({
        where: {
            clerkId: clerkId
        },
        select: {
            id: true
        }
    })

    await db.sucessStory.create({
        data: {
            VideoUrl: VideoUrl,
            description,
            userId: user?.id
        }
    })

    return { success: "Success Story Created" }
}
