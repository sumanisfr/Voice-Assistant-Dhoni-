let apiKey = "AIzaSyDR8ne9V4KJIrhsX4BNiQFmlO8JebzsnsM";

import{
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from ("@google/generative-ai");


const genAI = new GoogleGenerativeAI({apiKey});

const model = genAI.getGenerativeModel("gemini-2.5-flash");

const generationConfig = {
  temperature: 1,
  maxTokens: 1024,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseFormat: "text/plain",
}

async function run(prompt){
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt); 
  console.log(result.response.text());
}

export default run();