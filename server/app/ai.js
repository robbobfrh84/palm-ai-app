const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const { log } = require('console');
const { getPromptString } = require('./prompt.js');
const { validColors } = require('./colors.js');

const dotenv = require('dotenv');
dotenv.config();

const API_KEY = process.env.AI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const reqTextPrompt = function( thing, colors ) {

  const promptString = getPromptString( thing, colors );

  return new Promise(resolve => {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    chatSession.sendMessage(promptString).then(result => {
      let outputs = JSON.parse(result.response.text())
      console.log('🚨 thing, outputs:',thing, outputs)
      if (!outputs.length > 0) {
        outputs = outputs[thing]
      } 
      const { validOutputs, invalidOutputs } = isValidColors(outputs)
      resolve({ outputs, invalidOutputs, validOutputs })
    });
  })
}
  
function isValidColors(outputs) {
  const validOutputs = []
  const invalidOutputs = []
  outputs.forEach( color => {
    let validColor = false
    validColors.split(", ").forEach(c => {
      if (c === color) {
        validColor = true
        validOutputs.push(color)
      }
    })
    if (!validColor) {
      invalidOutputs.push(color)
    }
  })
  return { validOutputs, invalidOutputs }
}

module.exports = { reqTextPrompt }