let _URL = "http://localhost:8080/"
let loaderOn = false

window.onload = ()=>{
  const hash = window.location.hash
  const clientURL = window.location.origin + window.location.pathname
  if ( clientURL === "https://robbobfrh84.github.io/palm-ai-app/" || hash === "#prod") {
    _URL = "https://palm-ai-app.uw.r.appspot.com/"
  }
  thingInput.focus()
}

window.reload = ()=>{
  thingInput.focus()
}

document.body.addEventListener("keypress", function(event) {
  if (event.key === "Enter" && thingInput.value != "") {
    event.preventDefault();
    get()
  } 
})

function UIGet(thing, colors, requests) {
  colorNames.innerHTML = ""
  get(thing, colors, requests)
}

function get(thing, colors, requests, resultsObj){
  const request = {
    thing: thing || thingInput.value,
    colors: colors || colorsInput.value,
    requests: requests || requestsInput.value
  }
  console.log('request:',request)
  const urlString = _URL+request.thing+"/"+request.colors
  turnOnLoader()
  fetch(urlString)
    .then( res => res.json())
    .then( data => handleColors(data, request, resultsObj))
    .catch( error => { loaderOn = false; turnOffLoader(); } )
    .finally( ()=> turnOffLoader() )
}

function handleColors(
  { validOutputs, colorObjectArray },
  { thing, colors, requests }, 
  resultsObj
) {
  resultsObj = trackResults(validOutputs, resultsObj)
  if (resultsObj.requestCnt < requests) {
    get(thing, colors, requests, resultsObj)
  } else {
    loaderOn = false
  }
  if (resultsObj.requestCnt == 1) { colorNames.innerHTML = "" }
  displayColors(resultsObj, colorObjectArray)
  console.log('resultsObj:',resultsObj)
}

function trackResults(validOutputs, resultsObj) {
  if (!resultsObj) { resultsObj = { colors: {}, requestCnt: 0 } }
  resultsObj.toAdd = []
  resultsObj.requestCnt++
  validOutputs.forEach(c=>{
    if (!resultsObj.colors[c]) {
      resultsObj.colors[c] = 1
      resultsObj.toAdd.push(c)
    } else {
      resultsObj.colors[c]++
    }
  })
  return resultsObj
}

function displayColors(resultsObj, colorObjectArray) {
  resultsObj.toAdd.forEach(c=>{
    let rgb = colorObjectArray.filter(o=>o.name === c)[0]?.rgb
    colorNames.innerHTML += /*html*/`
      <div class="colorCircleContainer">
        <div class='colorName'>${c}</div>
        <div 
          class='colorCircle' id="${c}" 
          style="background-color: ${rgb || ''};"
        ></div>
      </div>
    `
    if (!rgb && c === "transparent") {
      window[c].style = "background: url('assets/transparent.png');"
    }
  })
}


// 🟢... 🟡... 🔴...  LOADER
function turnOnLoader() {
  loaderOn = true
  loader.innerHTML = "...Loading"
}

function turnOffLoader() {
  if (!loaderOn) {
    loader.innerHTML = ""
  }
}
