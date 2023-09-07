function buildColorResultContainer(divide) {
  resultsSection.innerHTML = /*html*/`
    <div id="historiclPosition_${_historyCnt}">
      <span id="historicalDivide_${_historyCnt}" class="divider historicalDivide"></span> 
      <div id="historical_${_historyCnt}" class="historical"></div>
      <div id="colorsResult_${_historyCnt}" class="colorResultsContainer"></div>
    </div>
  ` + resultsSection.innerHTML
}

function handleColors({ validOutputs, colorObjectArray }, req, resultsObj) {
  resultsObj = trackResults(validOutputs, colorObjectArray, req, resultsObj)

  if (resultsObj.requestCnt < req.requests) {
    get(req.thing, resultsObj, true)
  } else {
    _loaderOn = false
    if (_getHardCoded) { createHardCodedAlert(req.thing, resultsObj.colors) }
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
    buildHTML(c)
    buildDelay(c, resultsObj.lastDelay)
  })

  checkLoaderOff(requestCnt, resultsObj.lastDelay)
}

function buildDelay(c, delay) {
  const name = c.name
  const resultColorWidth = getComputedStyle(document.documentElement).getPropertyValue('--resultColorWidth')
  const resultColorBoxShadow = getComputedStyle(document.documentElement).getPropertyValue('--resultColorBoxShadow')
  const resultColorMargin = getComputedStyle(document.documentElement).getPropertyValue('--resultColorMargin')
  let rowBreak = ((c.rank - 1) % 3 === 0) ? true : false

  setTimeout(()=>{
    if (c.rank === 1 || rowBreak) {
      // * This is a bit clumbsy... But, because of how we animate the bubbles out there need to be a set hight for the circle to measure against. If the hight is 0, of the container, we bubble from top down. which looks less clean. SO, the makes all Colors background track with the growth. It isn't needed on first request, only when we have history.
      const CSSvars = getComputedStyle(document.documentElement)
      const resultColorMargin = parseFloat( CSSvars.getPropertyValue('--resultColorMargin') )
      const rowHeight = parseFloat( CSSvars.getPropertyValue('--resultColorWidth') )
      const currentRowHeight = parseFloat(window["colorsResult_"+_historyCnt].style.height || 0)
      const height = rowHeight + currentRowHeight + (resultColorMargin *2)
      window["colorsResult_"+_historyCnt].style.height = height+'rem'
    }
    window["color-"+name+"_"+_historyCnt].style.width = resultColorWidth 
    window["color-"+name+"_"+_historyCnt].style.height = resultColorWidth
    window["color-"+name+"_"+_historyCnt].style.boxShadow =  resultColorBoxShadow 
    window["color-"+name+"_"+_historyCnt].parentElement.style.margin = resultColorMargin
    window["color-"+name+"_"+_historyCnt].style.marginTop = "0rem"
  }, delay)
}

function buildHTML(c){
  let rowBreak = (c.rank !== 1 && (c.rank - 1) % 3 === 0) ? true : false
  if (rowBreak) {
    window["colorsResult_"+_historyCnt].appendChild(document.createElement("br"))
  }

  const containerElm = document.createElement('div')
  containerElm.classList.add('colorCircleContainer')

  const colorElm = document.createElement('div')
  colorElm.classList.add('colorCircle')
  colorElm.id = "color-"+c.name+"_"+_historyCnt

  colorElm.style.backgroundColor = c.rgb || ''
  if (!c.rgb && c.name === "transparent") {
    const resultColorTransparent = getComputedStyle(document.documentElement).getPropertyValue('--resultColorTransparent')
    colorElm.style.backgroundImage =resultColorTransparent
  } 

  containerElm.appendChild(colorElm)
  window["colorsResult_"+_historyCnt].appendChild(containerElm)
}

function addColorResultToHistory() {
  _newInput = false
  const saveReq = real_input.value
  const saveHistoricalCnt = _historyCnt
  _historyCnt++
  buildColorResultContainer()
  falseInputText.innerHTML = ''
  real_input.value = ''
  falseInputContainer.style.backgroundColor = "rgba(0,0,0,0)"
  adjustCursor()

  setTimeout(()=>{
    window['historical_'+saveHistoricalCnt].style.color = 'var(--themeB)'
    window['historical_'+saveHistoricalCnt].style.height = '1.5rem'
    window['historical_'+saveHistoricalCnt].style.paddingBottom = '1rem'
    window['historicalDivide_'+saveHistoricalCnt].style.height = '10px'
    window['historicalDivide_'+saveHistoricalCnt].style.marginTop = '5rem'
    setTimeout(()=>{
      window['historical_'+saveHistoricalCnt].innerHTML = saveReq
    }, 300) 
  }, 0)

}