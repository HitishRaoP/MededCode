import { z } from "zod"

export const ProgressSchema = z.object({
    date: z.string().min(8, { message: "Please Enter a valid date" }),
    mobility: z.enum(["low", "medium", "high"]),
    speech: z.enum(["low", "medium", "high"]),
    strength: z.enum(["low", "medium", "high"]),
    dailyActivities: z.enum(["low", "medium", "high"]),
})