"use server"
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function getExcercise() {
    const clerkId = await auth().userId || '';
    const user = await db.user.findUnique({
        where: {
            clerkId
        },
        select: {
            id: true
        }
    })
    const excercise = await db.exercise.findMany({
        where: {
            userId: user?.id
        }
    });
    return excercise;
}