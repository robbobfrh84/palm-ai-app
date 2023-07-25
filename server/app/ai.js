const { TextServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");
const { log } = require('console');
const { getPromptString } = require('./prompt.js')
const { validColors } = require('./colors.js');

const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.AI_API_KEY;

const MODEL_NAME = "models/text-bison-001";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const stopSequences = [];

const reqTextPrompt = function( thing, colors ) {

  const promptString = getPromptString( thing, colors )

  return new Promise(resolve => {
    client.generateText({
      model: MODEL_NAME, // required, which model to use to generate the result
      temperature: 0.35, // optional, 0.0 always uses the highest-probability result
      candidateCount: 1, // optional, how many candidate results to generate
      top_k: 40, // optional, number of most probable tokens to consider for generation
      top_p: 0.95, // optional, for nucleus sampling decoding strategy
      max_output_tokens: 1024, // optional, maximum number of output tokens to generate
      stop_sequences: stopSequences, // optional, sequences at which to stop model generation
      // * optional, safety settings
      safety_settings: [{"category":"HARM_CATEGORY_DEROGATORY","threshold":1},{"category":"HARM_CATEGORY_TOXICITY","threshold":1},{"category":"HARM_CATEGORY_VIOLENCE","threshold":2},{"category":"HARM_CATEGORY_SEXUAL","threshold":2},{"category":"HARM_CATEGORY_MEDICAL","threshold":2},{"category":"HARM_CATEGORY_DANGEROUS","threshold":2}],
      prompt: {
        text: promptString,
      },
    }).then(result => {
      // * console.log('result:',JSON.stringify(result, null, 2))
      const output = JSON.stringify(result[0].candidates[0].output, null, 2)
      const outputs = output.split('"').join("").split(", ")
      // * outputs.push("badoutput")
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