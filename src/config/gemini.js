




import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBKU3U477f1kcr1sr-qV-fjLjpgzLUNE8A" });

async function run(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents:prompt,
  });
  console.log(response.text);
  return response.text;
}

export default run;