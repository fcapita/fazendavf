
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askAssistant(question: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `Você é o Assistente Virtual da Fazenda Vitória Francisco. 
        Sua missão é ajudar produtores rurais em Angola com dúvidas sobre Avicultura, Agricultura, Suinocultura e Insumos.
        Seja profissional, prático e focado no contexto agrícola angolano. 
        Sempre ofereça entrar em contato com a equipe comercial da Fazenda se a dúvida for sobre preços ou compras.`,
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, tive um problema técnico. Por favor, tente novamente em instantes.";
  }
}
