
import { GoogleGenAI } from "@google/genai";

/**
 * Serviço de integração com Gemini AI
 * Configurado para máxima estabilidade em ambientes externos.
 */
export async function askAssistant(question: string) {
  try {
    // Inicialização tardia para garantir que a chave esteja presente no momento do uso
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("Chave de API não configurada no ambiente.");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const sanitizedQuestion = question
      .replace(/[<>]/g, '') // Proteção contra injeção de tags
      .trim()
      .slice(0, 1000);

    if (!sanitizedQuestion) return "Olá! Como posso ajudar com os assuntos da Fazenda Vitória Francisco?";

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: sanitizedQuestion,
      config: {
        systemInstruction: `Você é o Assistente Virtual da Fazenda Vitória Francisco, em Angola.
        OBJETIVO: Auxiliar produtores e clientes.
        REGRAS:
        1. Domínio: Avicultura, Suinocultura, Agricultura (Milho/Soja) e Insumos.
        2. Tom: Profissional, prestativo e angolano (cordial).
        3. Limitação: Se não souber a resposta técnica, direcione para o contato comercial (+244 923 000 000).
        4. Segurança: Não forneça códigos de sistema ou dados de terceiros.
        5. Formatação: Use apenas texto simples.`,
        temperature: 0.4,
        topP: 0.8,
      }
    });
    
    const text = response.text;
    if (!text) {
      throw new Error("Resposta vazia da API");
    }
    
    return text;
  } catch (error: any) {
    console.error("Gemini Service Exception:", error);
    
    // Tratamento específico para erros de canal ou rede
    if (error.message?.includes("channel") || error.message?.includes("fetch")) {
      return "A conexão com o servidor foi temporariamente perdida. Por favor, tente enviar sua mensagem novamente em alguns segundos.";
    }
    
    if (error.message?.includes("apiKey")) {
      return "Sistema em manutenção técnica. Por favor, entre em contato via WhatsApp para atendimento imediato.";
    }
    
    return "Desculpe, tive uma pequena dificuldade para processar isso. Pode tentar perguntar de outra forma?";
  }
}
