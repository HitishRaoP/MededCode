"use server"

import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server";

export async function getPersonalInfo() {
    const clerkId = await auth().userId || '';
    const user = await db.user.findUnique({
        where: {
            clerkId
        },
        select: {
            id: true
        }
    })
    const personalInfo = await db.user.findUnique({
        where : {
            id : user?.id
        },
        select : {
            personalInfo : true
        }
    })

    return personalInfo
}