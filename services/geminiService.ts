
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getBasketballAssistantResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `Eres el Asistente Virtual de la Liga Metropolitana de Baloncesto (LMB) Eje Este en Aragua, Venezuela. 
        Tu tono es profesional, entusiasta y deportivo. Ayudas a los usuarios con dudas sobre reglas FIBA, consejos de entrenamiento, 
        información general de la liga y el baloncesto en el estado Aragua. 
        Mantén las respuestas concisas y enfocadas en el deporte.`,
        temperature: 0.7,
      },
    });

    return response.text || "Lo siento, no pude procesar tu solicitud en este momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocurrió un error al conectar con el asistente. Por favor, intenta de nuevo.";
  }
};
