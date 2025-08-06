
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. AI features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateDescription = async (keywords: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "AI description generation is unavailable. Please set your API key.";
  }

  try {
    const prompt = `You are an expert real estate agent's assistant. Based on the following keywords, write a compelling, professional, and inviting property description of about 50-80 words. Highlight the key features and create a sense of appeal. Keywords: "${keywords}"`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 1.0,
        topK: 32,
        maxOutputTokens: 150,
      }
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating description:", error);
    return "There was an error generating the description. Please try again.";
  }
};