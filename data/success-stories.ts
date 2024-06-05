"use server"
import { db } from "@/lib/db";

export async function getSuccessStories() {
    const successStories = await db.sucessStory.findMany();
    return successStories;
}