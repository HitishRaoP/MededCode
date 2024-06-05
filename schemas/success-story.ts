import { z } from "zod";

export const SuccessStorySchema = z.object({
    VideoUrl : z.string().min(1, {message : "Please Enter a valid video url"}),
    description : z.string().min(1, {message : "Please Enter a valid description"}),
})