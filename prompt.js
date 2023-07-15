function getPromptString(input) {

const validColors = "red, brown, green, blue, orange, pink, purple, white, black, gray, yellow, green"
const valueOthers = "transparent"
const classifications = validColors + ", " + valueOthers

const examplesArray = [
  ["blood", "red"],
  ["grass", "green"],
  ["sky", "blue"],
  ["wood", "brown"],
  ["cloud", "white, transparent"],
  ["bee", "yellow, black, gray"],
  ["cow", "black, white, brown"],
  ["tree", "green, brown"],
  ["clown fish", "orange, white, black"],
  ["window", "transparent"]
]

const examples = examplesArray.map(e=>"input: "+e[0]+"\noutput: "+e[1]+"\n")

console.log('examples:',examples)

// const promptString = `
// input: Blood
// output: red

// input: Grass
// output: green

// input: Sky
// output: blue

// input: Wood
// output: brown

// input: Cloud
// output: white

// input: Bee
// output: yellow, black

// input: Cow
// output: black, white

// input: Tree
// output: green, brown

// input: Clown fish
// output: orange, white, black

// input: window
// output: transparent

// Classify the following items as [${classifications}].

// return minimum 2 outputs, seperated by a comma.

// input: ${input}
// output:
// `

const promptString = `
Classify the following.
Options:
- red
- brown
- green
- blue
- orange
- pink
- purple 
- white 
- black
- grey

Text: Sky
The answer is: blue
Text: blood
The answer is: red
Text: grass
The answer is: green

Text: ${input}
The answer is:
`


console.log('promptString:',promptString)

return promptString

}
module.exports = { getPromptString }