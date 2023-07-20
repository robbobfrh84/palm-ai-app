const process = require('process');
const argument = process.argv[2];

const { reqTextPrompt } = require('./ai.js')

const input = argument || "sun"

if (!argument) {
  console.log(`\n\n No input entered, default will be "${input} ".\n\n `)
}

async function getTextPrompt() {
  const { outputs, invalidOutputs, validOutputs } = await reqTextPrompt(input)
  console.log('input:',input)
  console.log('outputs:',outputs)
  console.log('invalidOutouts:', invalidOutputs)
  console.log('validOutputs:', validOutputs)
}
getTextPrompt()