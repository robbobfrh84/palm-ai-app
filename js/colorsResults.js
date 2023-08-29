function handleColors({ validOutputs, colorObjectArray }, req, resultsObj) {
  resultsObj = trackResults(validOutputs, colorObjectArray, req, resultsObj)

  if (resultsObj.requestCnt < req.requests) {
    get(req.thing, resultsObj, true)
  } else {
    _loaderOn = false
  }

  displayColors(resultsObj)
}

function trackResults(validOutputs, colorObjectArray, req, resultsObj) {
  if (!resultsObj) { 
    resultsObj = { 
      req: req,
      colors: {}, 
      requestCnt: 0, 
      lastDelay: 0,
      requestDelay: Date.now()
    } 
  }
  resultsObj.toAdd = []
  resultsObj.requestCnt++
  validOutputs.forEach( c => {
    if (!resultsObj.colors[c]) {
      const obj = colorObjectArray.filter(o=>o.name === c)[0] || {name: c}
      resultsObj.colors[c] = { count: 1, ...obj }
      resultsObj.toAdd.push({ count: 1, ...obj, rank: Object.keys(resultsObj.colors).length })
    } else {
      resultsObj.colors[c].count++
    }
  })
  return resultsObj
}

function displayColors(resultsObj) { // * So, this was pretty tricky to get the loader to turn off at the right time. Often it would be too soon as we had fake delays. 
  const requestCnt = resultsObj.requestCnt 

  resultsObj.requestDelay = Date.now() - resultsObj.requestDelay
  const reqDelay = resultsObj.requestDelay
  resultsObj.requestDelay = Date.now()
  resultsObj.lastDelay -= reqDelay

  resultsObj.toAdd.forEach( c =>{
    const randomDelay = c.rank == 1 ? 0 : random(200,750)
    resultsObj.lastDelay += randomDelay
    const delay = resultsObj.lastDelay
    buildHTML(c)

    const name = c.name
    const resultColorWidth = getComputedStyle(document.documentElement).getPropertyValue('--resultColorWidth')
    const resultColorBoxShadow = getComputedStyle(document.documentElement).getPropertyValue('--resultColorBoxShadow')
    const resultColorMargin = getComputedStyle(document.documentElement).getPropertyValue('--resultColorMargin')

    setTimeout(()=>{
      window["color-"+name].style.width = resultColorWidth 
      window["color-"+name].style.height = resultColorWidth
      window["color-"+name].style.boxShadow =  resultColorBoxShadow 
      window["color-"+name].parentElement.style.margin = resultColorMargin
      window["color-"+name].style.marginTop = "0rem"
    }, delay)
  })

  checkLoaderOff(requestCnt, resultsObj.lastDelay)

}

function buildHTML(c){
  let rowBreak = (c.rank !== 1 && (c.rank - 1) % 3 === 0) ? true : false
  if (rowBreak) {
    colorsResult.appendChild(document.createElement("br"))
  }

  const containerElm = document.createElement('div')
  containerElm.classList.add('colorCircleContainer')

  const colorElm = document.createElement('div')
  colorElm.classList.add('colorCircle')
  colorElm.id = "color-"+c.name

  colorElm.style.backgroundColor = c.rgb || ''
  if (!c.rgb && c.name === "transparent") {
    const resultColorTransparent = getComputedStyle(document.documentElement).getPropertyValue('--resultColorTransparent')
    colorElm.style.backgroundImage =resultColorTransparent
  } 

  containerElm.appendChild(colorElm)
  colorsResult.appendChild(containerElm)
}