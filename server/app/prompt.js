const { validColors } = require('./colors.js')

function getPromptString(thing, colors) {

  const examplesArray = [
    ["blood", "red"],
    ["grass", "green"],
    ["sky", "blue, white, gray"],
    ["wood", "brown"],
    ["cloud", "white, transparent"],
    ["bee", "yellow, black, silver"],
    ["cow", "black, white, brown"],
    ["tree", "green, brown"],
    ["clown fish", "orange, white, black"],
    ["window", "transparent"],
    ["rainbow", "violet, indigo, blue, green, yellow, orange, red, transparent" ],
    ["glass", "transparent" ],
    ["france", "red, white, blue"],
    ["mexico", "green, white, red"]
  ]

  const examples = examplesArray.map(e=>"input: "+e[0]+"\noutput: "+e[1]+"\n").join('')

  const promptString = `
  ${examples}
  
  Classify the following items as [${validColors}].

  return minimum ${colors} outputs, seperated by a comma.

  input: ${thing}
  output:
  `

  return promptString
}
module.exports = { getPromptString }