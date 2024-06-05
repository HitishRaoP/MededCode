"use server"
import { db } from "@/lib/db";
import { PersonalSchema } from "@/schemas/personal";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

export async function CreatePersonalInfo(values: z.infer<typeof PersonalSchema>) {

    const validatedFields = PersonalSchema.parse(values)

    if (!validatedFields) {
        return ({ error: "Error Occured" })
    }
    const { gender, age, dateofStroke, timeofStroke, typeofStroke, location, description, symptoms } = validatedFields

    const clerkId = await auth().userId || ''
    const user = await db.user.findUnique({
        where: {
            clerkId
        },
        select: {
            id: true
        }
    })
    await db.personalInfo.create({
        data: {
            gender,
            age,
            dateofStroke,
            timeofStroke,
            typeofStroke,
            location,
            description,
            symptoms,
            User: {
                connect: {
                    id: user?.id
                }
            }
        }
    })

    return ({
        success: "Personal Info Created Successfully"
    })
}