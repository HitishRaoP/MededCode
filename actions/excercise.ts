"use server"
import { db } from "@/lib/db";
import { ExcerciseSchema } from "@/schemas/excercise";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

export async function CreateExcercise(values: z.infer<typeof ExcerciseSchema>) {
    const validatedFields = ExcerciseSchema.parse(values)

    if (!validatedFields) {
        return ({
            error: "Error occured"
        })
    }

    const { date, excerciseType, duration, intensity, pain } = validatedFields

    const clerkId = await auth().userId || ''

    const user = await db.user.findUnique({
        where: {
            clerkId: clerkId
        },
        select: {
            id: true
        }
    })

    await db.exercise.create({
        data: {
            date,
            excerciseType,
            duration,
            intensity,
            pain,
            userId: user?.id
        }

    })
    return ({
        success: "Excercise Info Created Successfully"
    })

}