import { z } from "zod"

export const PersonalSchema = z.object({
    gender: z.enum(["male", "female"]),
    age: z
        .string()
        .min(1, { message: "Please Enter a valid age" }),
    dateofStroke: z.string().min(8, { message: "Please Enter a valid date" }),
    timeofStroke: z.string().min(4, { message: "Please Enter a valid time" }),
    typeofStroke: z.string().min(1, { message: "Please Enter a valid type" }),
    location: z.string().min(1, { message: "Please Enter a valid location" }),
    description: z.string().optional(),
    symptoms: z.string().min(1, { message: "Please Enter Your Symptoms" }),
})