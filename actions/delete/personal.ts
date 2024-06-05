import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function DeletePersonal() {
    const clerkId = await auth().userId || "";
    const user = await db.user.findUnique({
        where: {
            clerkId,
        },
        select: {
            id: true,
        },
    })
    await db.personalInfo.delete({
        where: {
            id : user?.id,
        },
    });
}