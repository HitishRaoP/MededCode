"use server"

import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server";

export async function getProgress() {
    const clerkId = await auth().userId || '';
    const user = await db.user.findUnique({
        where: {
            clerkId
        },
        select: {
            id: true
        }
    })
    const progress = await db.progressInfo.findMany({
        where: {
            userId: user?.id
        }
    }
)
    return progress
}