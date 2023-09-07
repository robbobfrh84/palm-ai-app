const examples = [ // * 👀 formats to oneline > https://www.text-utils.com/json-formatter/
  // reds
  {"thing":"Lava","saved":[{"count":2,"name":"orange","rgb":"rgb(255, 165, 0)","hex":"#ffa500","rank":1},{"count":3,"name":"red","rgb":"rgb(255, 0, 0)","hex":"#ff0000","rank":2},{"count":2,"name":"yellow","rgb":"rgb(255, 255, 0)","hex":"#ffff00","rank":3},{"count":2,"name":"orangered","rgb":"rgb(255, 69, 0)","hex":"#ff4500","rank":4},{"count":2,"name":"maroon","rgb":"rgb(128, 0, 0)","hex":"#800000","rank":5}]},  
  // greens
  {"thing":"Swamp","saved":[{"count":2,"name":"green","rgb":"rgb(0, 128, 0)","hex":"#008000","rank":1},{"count":2,"name":"brown","rgb":"rgb(165, 42, 42)","hex":"#a52a2a","rank":2},{"count":2,"name":"gray","rgb":"rgb(128, 128, 128)","hex":"#808080","rank":3},{"count":2,"name":"olive","rgb":"rgb(128, 128, 0)","hex":"#808000","rank":4},{"count":1,"name":"darkgreen","rgb":"rgb(0, 100, 0)","hex":"#006400","rank":5},{"count":1,"name":"black","rgb":"rgb(0, 0, 0)","hex":"#000000","rank":6}]},
  {"thing":"Forest","saved":[{"count":2,"name":"green","rgb":"rgb(0, 128, 0)","hex":"#008000","rank":1},{"count":2,"name":"lime","rgb":"rgb(0, 255, 0)","hex":"#00ff00","rank":2},{"count":2,"name":"olive","rgb":"rgb(128, 128, 0)","hex":"#808000","rank":3},{"count":1,"name":"yellow","rgb":"rgb(255, 255, 0)","hex":"#ffff00","rank":4},{"count":1,"name":"navy","rgb":"rgb(0, 0, 128)","hex":"#000080","rank":5},{"count":1,"name":"darkgreen","rgb":"rgb(0, 100, 0)","hex":"#006400","rank":6},{"count":1,"name":"lightgreen","rgb":"rgb(144, 238, 144)","hex":"#90ee90","rank":7}]},
  // blues
  {"thing":"Ocean","saved":[{"count":2,"name":"blue","rgb":"rgb(0, 0, 255)","hex":"#0000ff","rank":1},{"count":2,"name":"teal","rgb":"rgb(0, 128, 128)","hex":"#008080","rank":2},{"count":2,"name":"aqua","rgb":"rgb(0, 255, 255)","hex":"#00ffff","alias":"cyan","rank":3},{"count":1,"name":"green","rgb":"rgb(0, 128, 0)","hex":"#008000","rank":4},{"count":2,"name":"lightblue","rgb":"rgb(173, 216, 230)","hex":"#add8e6","rank":5},{"count":1,"name":"lightcyan","rgb":"rgb(224, 255, 255)","hex":"#e0ffff","rank":6}]},  
  // purples/pinks
  {"thing":"Barbie","saved":[{"count":1,"name":"magenta","rgb":"rgb(255, 0, 255)","hex":"#ff00ff","alias":"fuchsia","rank":1},{"count":2,"name":"white","rgb":"rgb(255, 255, 255)","hex":"#ffffff","rank":2},{"count":1,"name":"lightpink","rgb":"rgb(255, 182, 193)","hex":"#ffb6c1","rank":3},{"count":1,"name":"lightblue","rgb":"rgb(173, 216, 230)","hex":"#add8e6","rank":4},{"count":1,"name":"lightyellow","rgb":"rgb(255, 255, 224)","hex":"#ffffe0","rank":5},{"count":1,"name":"pink","rgb":"rgb(255, 192, 203)","hex":"#ffc0cb","rank":6},{"count":1,"name":"yellow","rgb":"rgb(255, 255, 0)","hex":"#ffff00","rank":7},{"count":1,"name":"black","rgb":"rgb(0, 0, 0)","hex":"#000000","rank":8},{"count":1,"name":"blue","rgb":"rgb(0, 0, 255)","hex":"#0000ff","rank":9},{"count":1,"name":"red","rgb":"rgb(255, 0, 0)","hex":"#ff0000","rank":10}]},
  // oranges/yellows
  {"thing":"Calico Cat","saved":[{"count":2,"name":"white","rgb":"rgb(255, 255, 255)","hex":"#ffffff","rank":1},{"count":2,"name":"orange","rgb":"rgb(255, 165, 0)","hex":"#ffa500","rank":2},{"count":2,"name":"black","rgb":"rgb(0, 0, 0)","hex":"#000000","rank":3}]},
  {"thing":"Golden Gate","saved":[{"count":2,"name":"gold","rgb":"rgb(255, 215, 0)","hex":"#ffd700","rank":1},{"count":2,"name":"orange","rgb":"rgb(255, 165, 0)","hex":"#ffa500","rank":2},{"count":2,"name":"brown","rgb":"rgb(165, 42, 42)","hex":"#a52a2a","rank":3},{"count":1,"name":"yellow","rgb":"rgb(255, 255, 0)","hex":"#ffff00","rank":4},{"count":1,"name":"black","rgb":"rgb(0, 0, 0)","hex":"#000000","rank":5},{"count":1,"name":"silver","rgb":"rgb(192, 192, 192)","hex":"#c0c0c0","rank":6},{"count":1,"name":"gray","rgb":"rgb(128, 128, 128)","hex":"#808080","rank":7}]},
  // clears
  {"thing":"Glass","saved":[{"count":2,"name":"transparent","rank":1},{"count":2,"name":"gray","rgb":"rgb(128, 128, 128)","hex":"#808080","rank":2},{"count":2,"name":"white","rgb":"rgb(255, 255, 255)","hex":"#ffffff","rank":3},{"count":2,"name":"silver","rgb":"rgb(192, 192, 192)","hex":"#c0c0c0","rank":4},{"count":1,"name":"lightblue","rgb":"rgb(173, 216, 230)","hex":"#add8e6","rank":5},{"count":1,"name":"lightgreen","rgb":"rgb(144, 238, 144)","hex":"#90ee90","rank":6}]},  
  {"thing":"Clouds","saved":[{"count":2,"name":"white","rgb":"rgb(255, 255, 255)","hex":"#ffffff","rank":1},{"count":2,"name":"gray","rgb":"rgb(128, 128, 128)","hex":"#808080","rank":2},{"count":2,"name":"transparent","rank":3}]},{"thing":"Clouds","saved":[{"count":2,"name":"white","rgb":"rgb(255, 255, 255)","hex":"#ffffff","rank":1},{"count":2,"name":"gray","rgb":"rgb(128, 128, 128)","hex":"#808080","rank":2},{"count":2,"name":"transparent","rank":3}]},  
  // darks
  {"thing":"Gothic","saved":[{"count":2,"name":"black","rgb":"rgb(0, 0, 0)","hex":"#000000","rank":1},{"count":2,"name":"gray","rgb":"rgb(128, 128, 128)","hex":"#808080","rank":2},{"count":2,"name":"white","rgb":"rgb(255, 255, 255)","hex":"#ffffff","rank":3},{"count":2,"name":"silver","rgb":"rgb(192, 192, 192)","hex":"#c0c0c0","rank":4},{"count":1,"name":"red","rgb":"rgb(255, 0, 0)","hex":"#ff0000","rank":5},{"count":1,"name":"maroon","rgb":"rgb(128, 0, 0)","hex":"#800000","rank":6}]},
  // pastel
  {"thing":"Summer","saved":[{"count":1,"name":"skyblue","rgb":"rgb(135, 206, 235)","hex":"#87ceeb","rank":1},{"count":2,"name":"lightblue","rgb":"rgb(173, 216, 230)","hex":"#add8e6","rank":2},{"count":2,"name":"lightcyan","rgb":"rgb(224, 255, 255)","hex":"#e0ffff","rank":3},{"count":1,"name":"lightgreen","rgb":"rgb(144, 238, 144)","hex":"#90ee90","rank":4},{"count":1,"name":"lightyellow","rgb":"rgb(255, 255, 224)","hex":"#ffffe0","rank":5},{"count":1,"name":"aliceblue","rgb":"rgb(240, 248, 255)","hex":"#f0f8ff","rank":6},{"count":1,"name":"aqua","rgb":"rgb(0, 255, 255)","hex":"#00ffff","alias":"cyan","rank":7},{"count":1,"name":"lightseagreen","rgb":"rgb(32, 178, 170)","hex":"#20b2aa","rank":8}]},
  // all colors
  {"thing":"Rainbow","saved":[{"count":2,"name":"violet","rgb":"rgb(238, 130, 238)","hex":"#ee82ee","rank":1},{"count":2,"name":"indigo","rgb":"rgb(75, 0, 130)","hex":"#4b0082","rank":2},{"count":2,"name":"blue","rgb":"rgb(0, 0, 255)","hex":"#0000ff","rank":3},{"count":2,"name":"green","rgb":"rgb(0, 128, 0)","hex":"#008000","rank":4},{"count":2,"name":"yellow","rgb":"rgb(255, 255, 0)","hex":"#ffff00","rank":5},{"count":2,"name":"orange","rgb":"rgb(255, 165, 0)","hex":"#ffa500","rank":6}]},
  // emojies
  // {"thing":"🥶","saved":[{"count":2,"name":"aliceblue","rgb":"rgb(240, 248, 255)","hex":"#f0f8ff","rank":1},{"count":2,"name":"cadetblue","rgb":"rgb(95, 158, 160)","hex":"#5f9ea0","rank":2},{"count":2,"name":"lightsteelblue","rgb":"rgb(176, 196, 222)","hex":"#b0c4de","rank":3},{"count":2,"name":"lightblue","rgb":"rgb(173, 216, 230)","hex":"#add8e6","rank":4},{"count":1,"name":"lightcyan","rgb":"rgb(224, 255, 255)","hex":"#e0ffff","rank":5},{"count":1,"name":"cornflowerblue","rgb":"rgb(100, 149, 237)","hex":"#6495ed","rank":6},{"count":1,"name":"powderblue","rgb":"rgb(176, 224, 230)","hex":"#b0e0e6","rank":7}]},  
  // {"thing":"😤","saved":[{"count":2,"name":"red","rgb":"rgb(255, 0, 0)","hex":"#ff0000","rank":1},{"count":2,"name":"white","rgb":"rgb(255, 255, 255)","hex":"#ffffff","rank":2},{"count":1,"name":"black","rgb":"rgb(0, 0, 0)","hex":"#000000","rank":3},{"count":1,"name":"orange","rgb":"rgb(255, 165, 0)","hex":"#ffa500","rank":4},{"count":1,"name":"yellow","rgb":"rgb(255, 255, 0)","hex":"#ffff00","rank":5},{"count":2,"name":"transparent","rank":6}]},
  // {"thing":"👩‍🚀","saved":[{"count":2,"name":"white","rgb":"rgb(255, 255, 255)","hex":"#ffffff","rank":1},{"count":1,"name":"black","rgb":"rgb(0, 0, 0)","hex":"#000000","rank":2},{"count":1,"name":"gray","rgb":"rgb(128, 128, 128)","hex":"#808080","rank":3},{"count":1,"name":"silver","rgb":"rgb(192, 192, 192)","hex":"#c0c0c0","rank":4},{"count":1,"name":"orange","rgb":"rgb(255, 165, 0)","hex":"#ffa500","rank":5},{"count":1,"name":"aliceblue","rgb":"rgb(240, 248, 255)","hex":"#f0f8ff","rank":6},{"count":1,"name":"aqua","rgb":"rgb(0, 255, 255)","hex":"#00ffff","alias":"cyan","rank":7},{"count":2,"name":"transparent","rank":8}]}, 
  // sports teams 
  {"thing":"49ers","saved":[{"count":2,"name":"gold","rgb":"rgb(255, 215, 0)","hex":"#ffd700","rank":1},{"count":2,"name":"red","rgb":"rgb(255, 0, 0)","hex":"#ff0000","rank":2},{"count":2,"name":"white","rgb":"rgb(255, 255, 255)","hex":"#ffffff","rank":3}]}, 
  // countries
  {"thing":"USA","saved":[{"count":2,"name":"blue","rgb":"rgb(0, 0, 255)","hex":"#0000ff","rank":1},{"count":2,"name":"white","rgb":"rgb(255, 255, 255)","hex":"#ffffff","rank":2},{"count":2,"name":"red","rgb":"rgb(255, 0, 0)","hex":"#ff0000","rank":3}]},
  // fun
  {"thing":"Mountain","saved":[{"count":2,"name":"gray","rgb":"rgb(128, 128, 128)","hex":"#808080","rank":1},{"count":2,"name":"white","rgb":"rgb(255, 255, 255)","hex":"#ffffff","rank":2},{"count":2,"name":"green","rgb":"rgb(0, 128, 0)","hex":"#008000","rank":3},{"count":2,"name":"brown","rgb":"rgb(165, 42, 42)","hex":"#a52a2a","rank":4},{"count":1,"name":"black","rgb":"rgb(0, 0, 0)","hex":"#000000","rank":5},{"count":1,"name":"blue","rgb":"rgb(0, 0, 255)","hex":"#0000ff","rank":6},{"count":1,"name":"teal","rgb":"rgb(0, 128, 128)","hex":"#008080","rank":7}]},
  {"thing":"Popcorn","saved":[{"count":2,"name":"white","rgb":"rgb(255, 255, 255)","hex":"#ffffff","rank":1},{"count":2,"name":"yellow","rgb":"rgb(255, 255, 0)","hex":"#ffff00","rank":2},{"count":2,"name":"orange","rgb":"rgb(255, 165, 0)","hex":"#ffa500","rank":3},{"count":1,"name":"brown","rgb":"rgb(165, 42, 42)","hex":"#a52a2a","rank":4},{"count":1,"name":"tan","rgb":"rgb(210, 180, 140)","hex":"#d2b48c","rank":5}]},
  {"thing":"Castle","saved":[{"count":2,"name":"gray","rgb":"rgb(128, 128, 128)","hex":"#808080","rank":1},{"count":2,"name":"white","rgb":"rgb(255, 255, 255)","hex":"#ffffff","rank":2},{"count":1,"name":"beige","rgb":"rgb(245, 245, 220)","hex":"#f5f5dc","rank":3},{"count":2,"name":"silver","rgb":"rgb(192, 192, 192)","hex":"#c0c0c0","rank":4},{"count":2,"name":"brown","rgb":"rgb(165, 42, 42)","hex":"#a52a2a","rank":5},{"count":1,"name":"black","rgb":"rgb(0, 0, 0)","hex":"#000000","rank":6}]},
]

const tests = [ 'cat', 'pig', 'bird', 'trees' ]

function buildTests() {
  if (_showTests) {
    footerSection.innerHTML = /*html*/ `Tests:`
    tests.forEach( test => {
      footerSection.innerHTML += /*html*/`
        <button onclick="get('${test}')">${test}</button>
      `
    })
    footerSection.innerHTML += /*html*/` - Examples (real requests):`
    examples.forEach( example => {
      footerSection.innerHTML += /*html*/`
        <button onclick="get('${example.thing}')">${example.thing}</button>
      `
    })
  }
}

function createHardCodedAlert(thing, colors) {
  const saved = Object.keys(colors).map( (key, i) => {
    const obj = colors[key] 
    obj.rank = i + 1
    return obj
  })
  const example = JSON.stringify({ thing, saved })+","
  alert(example)
}

function randomExample() {
  if (_newInput) {
    addColorResultToHistory()
  }
  _newInput = true
  turnOnLoader() 
  toggleButtonsDisabled(true)
  const { thing, saved } = examples[random(0, examples.length - 1)]
  falseInputText.innerHTML = thing
  real_input.value = thing
  let delay = 1000
  saved.forEach( (c, i) => {
    const randomDelay = c.rank == 1 ? 0 : random(200,750)
    delay += randomDelay
    buildHTML(c)
    buildDelay(c, delay)
    if (i === saved.length -1) {
      setTimeout(()=>{
        turnOffLoader() 
        toggleButtonsDisabled(false)
      }, delay + 1000)
    }
  })
}
