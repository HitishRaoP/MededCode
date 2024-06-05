"use server"
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

export async function generateAdvice(query: string) {
    
const groq = createOpenAI({
    baseURL: 'https://api.groq.com/openai/v1',
    apiKey: process.env.GROQ_API_KEY,
  });
  
  const { text } = await generateText({
    model: groq('llama3-8b-8192'),
    prompt: query,
  });

  return text
}