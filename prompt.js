function getPromptString(input) {

const validColors = "red, brown, green, blue, orange, pink, purple, white, black, grey, yellow, green"
const valueOthers = "transparent"
const classifications = validColors + ", " + valueOthers

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

// const promptString = `
// Classify the following.
// Options:
// - red
// - brown
// - green
// - blue
// - orange
// - pink
// - purple 
// - white 
// - black
// - grey

// input: ${input}
// output:
// `

const promptString = `
prompt: "Give me a trophy colors"
only_return: ["red", "green", "blue"]
`

console.log('promptString:',promptString)

return promptString

}
module.exports = { getPromptString }