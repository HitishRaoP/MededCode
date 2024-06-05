import {z} from "zod"

export const ExcerciseSchema = z.object({
    date : z.string().min(8, { message: "Please Enter a valid date" }),
    excerciseType : z.enum(["Physical Therapy", "Occupational Therapy", "Speech Therapy"]),
    duration : z.string().min(1, { message: "Please Enter a valid duration" }),
    intensity : z.enum(["low", "medium", "high"]),
    pain : z.enum(["low", "medium", "high"]),
})