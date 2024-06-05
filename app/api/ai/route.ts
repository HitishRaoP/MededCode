import Groq from 'groq-sdk';
import { NextRequest, NextResponse } from 'next/server';

const groq = new Groq({
    apiKey: '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'
});

async function getGroqChatCompletion(q : string) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: q
            }
        ],
        model: "llama3-8b-8192"
    });
}

export async function GET(req: NextRequest, res: NextResponse) {
    const q = req.nextUrl.searchParams.get("q");
    const chatCompletion = await getGroqChatCompletion(q || "");
    const output = chatCompletion.choices[0]?.message?.content || "";
    return new Response(output);
}
