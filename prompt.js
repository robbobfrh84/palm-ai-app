const { colors } = require('./colors.js')

function getPromptString(input) {

// * How you get the colors >>> console.log('colors:', colors.map(c=>c.name).join(', ') )
const validColors = "black, silver, gray, white, maroon, red, purple, fuchsia, green, lime, olive, yellow, navy, blue, teal, aqua, orange, aliceblue, antiquewhite, aquamarine, azure, beige, bisque, blanchedalmond, blueviolet, brown, burlywood, cadetblue, chartreuse, chocolate, coral, cornflowerblue, cornsilk, crimson, cyan, darkblue, darkcyan, darkgoldenrod, darkgray, darkgreen, darkkhaki, darkmagenta, darkolivegreen, darkorange, darkorchid, darkred, darksalmon, darkseagreen, darkslateblue, darkslategray, darkturquoise, darkviolet, deeppink, deepskyblue, dimgray, dodgerblue, firebrick, floralwhite, forestgreen, gainsboro, ghostwhite, gold, goldenrod, greenyellow, honeydew, hotpink, indianred, indigo, ivory, khaki, lavender, lavenderblush, lawngreen, lemonchiffon, lightblue, lightcoral, lightcyan, lightgoldenrodyellow, lightgray, lightgreen, lightpink, lightsalmon, lightseagreen, lightskyblue, lightslategray, lightsteelblue, lightyellow, limegreen, linen, magenta, mediumaquamarine, mediumblue, mediumorchid, mediumpurple, mediumseagreen, mediumslateblue, mediumspringgreen, mediumturquoise, mediumvioletred, midnightblue, mintcream, mistyrose, moccasin, navajowhite, oldlace, olivedrab, orangered, orchid, palegoldenrod, palegreen, paleturquoise, palevioletred, papayawhip, peachpuff, peru, pink, plum, powderblue, rosybrown, royalblue, saddlebrown, salmon, sandybrown, seagreen, seashell, sienna, skyblue, slateblue, slategray, snow, springgreen, steelblue, tan, thistle, tomato, turquoise, violet, wheat, whitesmoke, yellowgreen, rebeccapurple"

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

const examples = examplesArray.map(e=>"input: "+e[0]+"\noutput: "+e[1]+"\n").join('')

console.log('examples:',`${examples}`)

const promptString = `
${examples}
Classify the following items as [${classifications}].

return minimum 2 outputs, seperated by a comma.

input: ${input}
output:
`

console.log('promptString:',promptString)

return promptString

}
module.exports = { getPromptString }