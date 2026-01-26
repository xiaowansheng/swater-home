import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { AIKO_SYSTEM_INSTRUCTION } from "@constants";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const getAIClient = (): GoogleGenAI => {
  if (!genAI) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing from environment variables.");
      // In a real app we might throw, but here we'll let the call fail gracefully later
    }
    genAI = new GoogleGenAI({ apiKey: apiKey || '' });
  }
  return genAI;
};

export const initializeChat = (): void => {
  try {
    const ai = getAIClient();
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: AIKO_SYSTEM_INSTRUCTION,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat:", error);
  }
};

export const sendMessageToAiko = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }
  
  if (!chatSession) {
    return "Sorry Senpai! I can't connect to my brain right now... (Missing API Key?)";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "...";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Ehh? Something went wrong! (｡•́︿•̀｡)";
  }
};