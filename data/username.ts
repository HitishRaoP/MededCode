"use server"
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function getUsername() {
    const clerkId = await auth().userId || '';

    const user = await db.user.findUnique({
        where: {
            clerkId: clerkId
        },
        select: {
            username: true
        }
    })
    return user
}