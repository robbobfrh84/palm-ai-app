const process = require('process');
const argument = process.argv[2];

const { TextServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");
const { log } = require('console');
const { getPromptString } = require('./prompt.js')

const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyD7T1qI3GXs3QFex_JPpCNL_uZEvnpYums";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

if (!argument) {
  console.log('\n\n No input entered, default will be "sun".\n\n ')
}
const input = argument || "sun"

const promptString = getPromptString(input)

const stopSequences = [];

client.generateText({
  model: MODEL_NAME, // required, which model to use to generate the result
  temperature: 0.35, // optional, 0.0 always uses the highest-probability result
  candidateCount: 1, // optional, how many candidate results to generate
  top_k: 40, // optional, number of most probable tokens to consider for generation
  top_p: 0.95, // optional, for nucleus sampling decoding strategy
  max_output_tokens: 1024, // optional, maximum number of output tokens to generate
  stop_sequences: stopSequences, // optional, sequences at which to stop model generation
  // optional, safety settings
  safety_settings: [{"category":"HARM_CATEGORY_DEROGATORY","threshold":1},{"category":"HARM_CATEGORY_TOXICITY","threshold":1},{"category":"HARM_CATEGORY_VIOLENCE","threshold":2},{"category":"HARM_CATEGORY_SEXUAL","threshold":2},{"category":"HARM_CATEGORY_MEDICAL","threshold":2},{"category":"HARM_CATEGORY_DANGEROUS","threshold":2}],
  prompt: {
    text: promptString,
  },
  // only_return: ["red", "green", "blue"],
}).then(result => {
  // console.log(JSON.stringify(result, null, 2));
  // console.log('result:',JSON.stringify(result, null, 2))
  const output = JSON.stringify(result[0].candidates[0].output, null, 2)
  console.log(input+" - "+output);
});


// Another option ... pretty much the oposite...

// const promptString = `input: red
// output: Apple,
// Strawberry,
// Tomato,
// Red rose,
// Fire truck,
// Stop sign,
// input: green
// output: Grass
// Trees
// Leaves
// Emeralds
// Limes
// Cucumbers
// input: blue
// output: The sky
// The ocean
// Blueberries
// Blue jays (a type of bird)
// Blue whales
// input: yellow
// output: Sunflowers
// Lemons
// Bananas
// Rubber ducks
// Corn
// input: white
// output: Snow
// Clouds
// Milk
// Sugar
// Salt
// Rice
// input: black
// output: Coal
// Night sky
// Blackboard
// Raven
// Tuxedo
// input: ${input}
// output:`;