const validOthers = "transparent"

// * How to get validColors: console.log('htmlColors:', htmlColors.map(c=>c.name).join(', '))
const validColors = validOthers + ", " + "black, silver, gray, white, maroon, red, purple, fuchsia, green, lime, olive, yellow, navy, blue, teal, aqua, orange, aliceblue, antiquewhite, aquamarine, azure, beige, bisque, blanchedalmond, blueviolet, brown, burlywood, cadetblue, chartreuse, chocolate, coral, cornflowerblue, cornsilk, crimson, cyan, darkblue, darkcyan, darkgoldenrod, darkgray, darkgreen, darkkhaki, darkmagenta, darkolivegreen, darkorange, darkorchid, darkred, darksalmon, darkseagreen, darkslateblue, darkslategray, darkturquoise, darkviolet, deeppink, deepskyblue, dimgray, dodgerblue, firebrick, floralwhite, forestgreen, gainsboro, ghostwhite, gold, goldenrod, greenyellow, honeydew, hotpink, indianred, indigo, ivory, khaki, lavender, lavenderblush, lawngreen, lemonchiffon, lightblue, lightcoral, lightcyan, lightgoldenrodyellow, lightgray, lightgreen, lightpink, lightsalmon, lightseagreen, lightskyblue, lightslategray, lightsteelblue, lightyellow, limegreen, linen, magenta, mediumaquamarine, mediumblue, mediumorchid, mediumpurple, mediumseagreen, mediumslateblue, mediumspringgreen, mediumturquoise, mediumvioletred, midnightblue, mintcream, mistyrose, moccasin, navajowhite, oldlace, olivedrab, orangered, orchid, palegoldenrod, palegreen, paleturquoise, palevioletred, papayawhip, peachpuff, peru, pink, plum, powderblue, rosybrown, royalblue, saddlebrown, salmon, sandybrown, seagreen, seashell, sienna, skyblue, slateblue, slategray, snow, springgreen, steelblue, tan, thistle, tomato, turquoise, violet, wheat, whitesmoke, yellowgreen, rebeccapurple"

//👀 NOTE! you'll see several gray colors noted out. 
// That's because they're the same color, just two different selling of each "gray"/"grey"
// KEEP THEM NOTED OUT! It could result in both colors being returned with the same value...
const htmlColors = [
  {
    "name": "black",
    "rgb": "rgb(0, 0, 0)",
    "hex": "#000000"
  }, {
    "name": "silver",
    "rgb": "rgb(192, 192, 192)",
    "hex": "#c0c0c0"
  }, {
    "name": "gray",
    "rgb": "rgb(128, 128, 128)",
    "hex": "#808080"
  }, {
    "name": "white",
    "rgb": "rgb(255, 255, 255)",
    "hex": "#ffffff"
  }, {
    "name": "maroon",
    "rgb": "rgb(128, 0, 0)",
    "hex": "#800000"
  }, {
    "name": "red",
    "rgb": "rgb(255, 0, 0)",
    "hex": "#ff0000"
  }, {
    "name": "purple",
    "rgb": "rgb(128, 0, 128)",
    "hex": "#800080"
  }, {
    "name": "fuchsia",
    "rgb": "rgb(255, 0, 255)",
    "hex": "#ff00ff",
    "alias": "magenta"
  }, {
    "name": "green",
    "rgb": "rgb(0, 128, 0)",
    "hex": "#008000"
  }, {
    "name": "lime",
    "rgb": "rgb(0, 255, 0)",
    "hex": "#00ff00"
  }, {
    "name": "olive",
    "rgb": "rgb(128, 128, 0)",
    "hex": "#808000"
  }, {
    "name": "yellow",
    "rgb": "rgb(255, 255, 0)",
    "hex": "#ffff00"
  }, {
    "name": "navy",
    "rgb": "rgb(0, 0, 128)",
    "hex": "#000080"
  }, {
    "name": "blue",
    "rgb": "rgb(0, 0, 255)",
    "hex": "#0000ff"
  }, {
    "name": "teal",
    "rgb": "rgb(0, 128, 128)",
    "hex": "#008080"
  },
  {
    "name": "aqua",
    "rgb": "rgb(0, 255, 255)",
    "hex": "#00ffff",
    "alias": "cyan"
  },
  {
    "name": "orange",
    "rgb": "rgb(255, 165, 0)",
    "hex": "#ffa500"
  }, {
    "name": "aliceblue",
    "rgb": "rgb(240, 248, 255)",
    "hex": "#f0f8ff"
  }, {
    "name": "antiquewhite",
    "rgb": "rgb(250, 235, 215)",
    "hex": "#faebd7"
  }, {
    "name": "aquamarine",
    "rgb": "rgb(127, 255, 212)",
    "hex": "#7fffd4"
  }, {
    "name": "azure",
    "rgb": "rgb(240, 255, 255)",
    "hex": "#f0ffff"
  }, {
    "name": "beige",
    "rgb": "rgb(245, 245, 220)",
    "hex": "#f5f5dc"
  }, {
    "name": "bisque",
    "rgb": "rgb(255, 228, 196)",
    "hex": "#ffe4c4"
  }, {
    "name": "blanchedalmond",
    "rgb": "rgb(255, 235, 205)",
    "hex": "#ffebcd"
  }, {
    "name": "blueviolet",
    "rgb": "rgb(138, 43, 226)",
    "hex": "#8a2be2"
  }, {
    "name": "brown",
    "rgb": "rgb(165, 42, 42)",
    "hex": "#a52a2a"
  }, {
    "name": "burlywood",
    "rgb": "rgb(222, 184, 135)",
    "hex": "#deb887"
  }, {
    "name": "cadetblue",
    "rgb": "rgb(95, 158, 160)",
    "hex": "#5f9ea0"
  }, {
    "name": "chartreuse",
    "rgb": "rgb(127, 255, 0)",
    "hex": "#7fff00"
  }, {
    "name": "chocolate",
    "rgb": "rgb(210, 105, 30)",
    "hex": "#d2691e"
  }, {
    "name": "coral",
    "rgb": "rgb(255, 127, 80)",
    "hex": "#ff7f50"
  }, {
    "name": "cornflowerblue",
    "rgb": "rgb(100, 149, 237)",
    "hex": "#6495ed"
  }, {
    "name": "cornsilk",
    "rgb": "rgb(255, 248, 220)",
    "hex": "#fff8dc"
  }, {
    "name": "crimson",
    "rgb": "rgb(220, 20, 60)",
    "hex": "#dc143c"
  }, {
    "name": "cyan",
    "rgb": "rgb(0, 255, 255)",
    "hex": "#00ffff",
    "alias": "aqua"
  }, {
    "name": "darkblue",
    "rgb": "rgb(0, 0, 139)",
    "hex": "#00008b"
  }, {
    "name": "darkcyan",
    "rgb": "rgb(0, 139, 139)",
    "hex": "#008b8b"
  }, {
    "name": "darkgoldenrod",
    "rgb": "rgb(184, 134, 11)",
    "hex": "#b8860b"
  }, {
    "name": "darkgray",
    "rgb": "rgb(169, 169, 169)",
    "hex": "#a9a9a9"
  }, {
    "name": "darkgreen",
    "rgb": "rgb(0, 100, 0)",
    "hex": "#006400"
  },
  // {
  //   "name": "darkgrey",
  //   "rgb": "rgb(169, 169, 169)",
  //   "hex": "#a9a9a9"
  // },
  {
    "name": "darkkhaki",
    "rgb": "rgb(189, 183, 107)",
    "hex": "#bdb76b"
  }, {
    "name": "darkmagenta",
    "rgb": "rgb(139, 0, 139)",
    "hex": "#8b008b"
  }, {
    "name": "darkolivegreen",
    "rgb": "rgb(85, 107, 47)",
    "hex": "#556b2f"
  }, {
    "name": "darkorange",
    "rgb": "rgb(255, 140, 0)",
    "hex": "#ff8c00"
  }, {
    "name": "darkorchid",
    "rgb": "rgb(153, 50, 204)",
    "hex": "#9932cc"
  }, {
    "name": "darkred",
    "rgb": "rgb(139, 0, 0)",
    "hex": "#8b0000"
  }, {
    "name": "darksalmon",
    "rgb": "rgb(233, 150, 122)",
    "hex": "#e9967a"
  }, {
    "name": "darkseagreen",
    "rgb": "rgb(143, 188, 143)",
    "hex": "#8fbc8f"
  }, {
    "name": "darkslateblue",
    "rgb": "rgb(72, 61, 139)",
    "hex": "#483d8b"
  }, {
    "name": "darkslategray",
    "rgb": "rgb(47, 79, 79)",
    "hex": "#2f4f4f"
  },
  // {
  //   "name": "darkslategrey",
  //   "rgb": "rgb(47, 79, 79)",
  //   "hex": "#2f4f4f"
  // },
  {
    "name": "darkturquoise",
    "rgb": "rgb(0, 206, 209)",
    "hex": "#00ced1"
  }, {
    "name": "darkviolet",
    "rgb": "rgb(148, 0, 211)",
    "hex": "#9400d3"
  }, {
    "name": "deeppink",
    "rgb": "rgb(255, 20, 147)",
    "hex": "#ff1493"
  }, {
    "name": "deepskyblue",
    "rgb": "rgb(0, 191, 255)",
    "hex": "#00bfff"
  }, {
    "name": "dimgray",
    "rgb": "rgb(105, 105, 105)",
    "hex": "#696969"
  },
  // {
  //   "name": "dimgrey",
  //   "rgb": "rgb(105, 105, 105)",
  //   "hex": "#696969"
  // },
  {
    "name": "dodgerblue",
    "rgb": "rgb(30, 144, 255)",
    "hex": "#1e90ff"
  }, {
    "name": "firebrick",
    "rgb": "rgb(178, 34, 34)",
    "hex": "#b22222"
  }, {
    "name": "floralwhite",
    "rgb": "rgb(255, 250, 240)",
    "hex": "#fffaf0"
  }, {
    "name": "forestgreen",
    "rgb": "rgb(34, 139, 34)",
    "hex": "#228b22"
  }, {
    "name": "gainsboro",
    "rgb": "rgb(220, 220, 220)",
    "hex": "#dcdcdc"
  }, {
    "name": "ghostwhite",
    "rgb": "rgb(248, 248, 255)",
    "hex": "#f8f8ff"
  }, {
    "name": "gold",
    "rgb": "rgb(255, 215, 0)",
    "hex": "#ffd700"
  }, {
    "name": "goldenrod",
    "rgb": "rgb(218, 165, 32)",
    "hex": "#daa520"
  }, {
    "name": "greenyellow",
    "rgb": "rgb(173, 255, 47)",
    "hex": "#adff2f"
  },
  // {
  //   "name": "grey",
  //   "rgb": "rgb(128, 128, 128)",
  //   "hex": "#808080"
  // },
  {
    "name": "honeydew",
    "rgb": "rgb(240, 255, 240)",
    "hex": "#f0fff0"
  }, {
    "name": "hotpink",
    "rgb": "rgb(255, 105, 180)",
    "hex": "#ff69b4"
  }, {
    "name": "indianred",
    "rgb": "rgb(205, 92, 92)",
    "hex": "#cd5c5c"
  }, {
    "name": "indigo",
    "rgb": "rgb(75, 0, 130)",
    "hex": "#4b0082"
  }, {
    "name": "ivory",
    "rgb": "rgb(255, 255, 240)",
    "hex": "#fffff0"
  }, {
    "name": "khaki",
    "rgb": "rgb(240, 230, 140)",
    "hex": "#f0e68c"
  }, {
    "name": "lavender",
    "rgb": "rgb(230, 230, 250)",
    "hex": "#e6e6fa"
  }, {
    "name": "lavenderblush",
    "rgb": "rgb(255, 240, 245)",
    "hex": "#fff0f5"
  }, {
    "name": "lawngreen",
    "rgb": "rgb(124, 252, 0)",
    "hex": "#7cfc00"
  }, {
    "name": "lemonchiffon",
    "rgb": "rgb(255, 250, 205)",
    "hex": "#fffacd"
  }, {
    "name": "lightblue",
    "rgb": "rgb(173, 216, 230)",
    "hex": "#add8e6"
  }, {
    "name": "lightcoral",
    "rgb": "rgb(240, 128, 128)",
    "hex": "#f08080"
  }, {
    "name": "lightcyan",
    "rgb": "rgb(224, 255, 255)",
    "hex": "#e0ffff"
  }, {
    "name": "lightgoldenrodyellow",
    "rgb": "rgb(250, 250, 210)",
    "hex": "#fafad2"
  }, {
    "name": "lightgray",
    "rgb": "rgb(211, 211, 211)",
    "hex": "#d3d3d3"
  }, {
    "name": "lightgreen",
    "rgb": "rgb(144, 238, 144)",
    "hex": "#90ee90"
  },
  // {
  //   "name": "lightgrey",
  //   "rgb": "rgb(211, 211, 211)",
  //   "hex": "#d3d3d3"
  // },
  {
    "name": "lightpink",
    "rgb": "rgb(255, 182, 193)",
    "hex": "#ffb6c1"
  }, {
    "name": "lightsalmon",
    "rgb": "rgb(255, 160, 122)",
    "hex": "#ffa07a"
  }, {
    "name": "lightseagreen",
    "rgb": "rgb(32, 178, 170)",
    "hex": "#20b2aa"
  }, {
    "name": "lightskyblue",
    "rgb": "rgb(135, 206, 250)",
    "hex": "#87cefa"
  }, {
    "name": "lightslategray",
    "rgb": "rgb(119, 136, 153)",
    "hex": "#778899"
  },
  // {
  //   "name": "lightslategrey",
  //   "rgb": "rgb(119, 136, 153)",
  //   "hex": "#778899"
  // },
  {
    "name": "lightsteelblue",
    "rgb": "rgb(176, 196, 222)",
    "hex": "#b0c4de"
  }, {
    "name": "lightyellow",
    "rgb": "rgb(255, 255, 224)",
    "hex": "#ffffe0"
  }, {
    "name": "limegreen",
    "rgb": "rgb(50, 205, 50)",
    "hex": "#32cd32"
  }, {
    "name": "linen",
    "rgb": "rgb(250, 240, 230)",
    "hex": "#faf0e6"
  }, {
    "name": "magenta",
    "rgb": "rgb(255, 0, 255)",
    "hex": "#ff00ff",
    "alias": "fuchsia"
  }, {
    "name": "mediumaquamarine",
    "rgb": "rgb(102, 205, 170)",
    "hex": "#66cdaa"
  }, {
    "name": "mediumblue",
    "rgb": "rgb(0, 0, 205)",
    "hex": "#0000cd"
  }, {
    "name": "mediumorchid",
    "rgb": "rgb(186, 85, 211)",
    "hex": "#ba55d3"
  }, {
    "name": "mediumpurple",
    "rgb": "rgb(147, 112, 219)",
    "hex": "#9370db"
  }, {
    "name": "mediumseagreen",
    "rgb": "rgb(60, 179, 113)",
    "hex": "#3cb371"
  }, {
    "name": "mediumslateblue",
    "rgb": "rgb(123, 104, 238)",
    "hex": "#7b68ee"
  }, {
    "name": "mediumspringgreen",
    "rgb": "rgb(0, 250, 154)",
    "hex": "#00fa9a"
  }, {
    "name": "mediumturquoise",
    "rgb": "rgb(72, 209, 204)",
    "hex": "#48d1cc"
  }, {
    "name": "mediumvioletred",
    "rgb": "rgb(199, 21, 133)",
    "hex": "#c71585"
  }, {
    "name": "midnightblue",
    "rgb": "rgb(25, 25, 112)",
    "hex": "#191970"
  }, {
    "name": "mintcream",
    "rgb": "rgb(245, 255, 250)",
    "hex": "#f5fffa"
  }, {
    "name": "mistyrose",
    "rgb": "rgb(255, 228, 225)",
    "hex": "#ffe4e1"
  }, {
    "name": "moccasin",
    "rgb": "rgb(255, 228, 181)",
    "hex": "#ffe4b5"
  }, {
    "name": "navajowhite",
    "rgb": "rgb(255, 222, 173)",
    "hex": "#ffdead"
  }, {
    "name": "oldlace",
    "rgb": "rgb(253, 245, 230)",
    "hex": "#fdf5e6"
  }, {
    "name": "olivedrab",
    "rgb": "rgb(107, 142, 35)",
    "hex": "#6b8e23"
  }, {
    "name": "orangered",
    "rgb": "rgb(255, 69, 0)",
    "hex": "#ff4500"
  }, {
    "name": "orchid",
    "rgb": "rgb(218, 112, 214)",
    "hex": "#da70d6"
  }, {
    "name": "palegoldenrod",
    "rgb": "rgb(238, 232, 170)",
    "hex": "#eee8aa"
  }, {
    "name": "palegreen",
    "rgb": "rgb(152, 251, 152)",
    "hex": "#98fb98"
  }, {
    "name": "paleturquoise",
    "rgb": "rgb(175, 238, 238)",
    "hex": "#afeeee"
  }, {
    "name": "palevioletred",
    "rgb": "rgb(219, 112, 147)",
    "hex": "#db7093"
  }, {
    "name": "papayawhip",
    "rgb": "rgb(255, 239, 213)",
    "hex": "#ffefd5"
  }, {
    "name": "peachpuff",
    "rgb": "rgb(255, 218, 185)",
    "hex": "#ffdab9"
  }, {
    "name": "peru",
    "rgb": "rgb(205, 133, 63)",
    "hex": "#cd853f"
  }, {
    "name": "pink",
    "rgb": "rgb(255, 192, 203)",
    "hex": "#ffc0cb"
  }, {
    "name": "plum",
    "rgb": "rgb(221, 160, 221)",
    "hex": "#dda0dd"
  }, {
    "name": "powderblue",
    "rgb": "rgb(176, 224, 230)",
    "hex": "#b0e0e6"
  }, {
    "name": "rosybrown",
    "rgb": "rgb(188, 143, 143)",
    "hex": "#bc8f8f"
  }, {
    "name": "royalblue",
    "rgb": "rgb(65, 105, 225)",
    "hex": "#4169e1"
  }, {
    "name": "saddlebrown",
    "rgb": "rgb(139, 69, 19)",
    "hex": "#8b4513"
  }, {
    "name": "salmon",
    "rgb": "rgb(250, 128, 114)",
    "hex": "#fa8072"
  }, {
    "name": "sandybrown",
    "rgb": "rgb(244, 164, 96)",
    "hex": "#f4a460"
  }, {
    "name": "seagreen",
    "rgb": "rgb(46, 139, 87)",
    "hex": "#2e8b57"
  }, {
    "name": "seashell",
    "rgb": "rgb(255, 245, 238)",
    "hex": "#fff5ee"
  }, {
    "name": "sienna",
    "rgb": "rgb(160, 82, 45)",
    "hex": "#a0522d"
  }, {
    "name": "skyblue",
    "rgb": "rgb(135, 206, 235)",
    "hex": "#87ceeb"
  }, {
    "name": "slateblue",
    "rgb": "rgb(106, 90, 205)",
    "hex": "#6a5acd"
  }, {
    "name": "slategray",
    "rgb": "rgb(112, 128, 144)",
    "hex": "#708090"
  },
  // {
  //   "name": "slategrey",
  //   "rgb": "rgb(112, 128, 144)",
  //   "hex": "#708090"
  // },
  {
    "name": "snow",
    "rgb": "rgb(255, 250, 250)",
    "hex": "#fffafa"
  }, {
    "name": "springgreen",
    "rgb": "rgb(0, 255, 127)",
    "hex": "#00ff7f"
  }, {
    "name": "steelblue",
    "rgb": "rgb(70, 130, 180)",
    "hex": "#4682b4"
  }, {
    "name": "tan",
    "rgb": "rgb(210, 180, 140)",
    "hex": "#d2b48c"
  }, {
    "name": "thistle",
    "rgb": "rgb(216, 191, 216)",
    "hex": "#d8bfd8"
  }, {
    "name": "tomato",
    "rgb": "rgb(255, 99, 71)",
    "hex": "#ff6347"
  }, {
    "name": "turquoise",
    "rgb": "rgb(64, 224, 208)",
    "hex": "#40e0d0"
  }, {
    "name": "violet",
    "rgb": "rgb(238, 130, 238)",
    "hex": "#ee82ee"
  }, {
    "name": "wheat",
    "rgb": "rgb(245, 222, 179)",
    "hex": "#f5deb3"
  }, {
    "name": "whitesmoke",
    "rgb": "rgb(245, 245, 245)",
    "hex": "#f5f5f5"
  }, {
    "name": "yellowgreen",
    "rgb": "rgb(154, 205, 50)",
    "hex": "#9acd32"
  }, {
    "name": "rebeccapurple",
    "rgb": "rgb(102, 51, 153)",
    "hex": "#663399"
  }]

  module.exports = { htmlColors, validColors, validOthers }