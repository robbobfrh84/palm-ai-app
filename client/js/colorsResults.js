function handleColors({ validOutputs, colorObjectArray }, req, resultsObj) {
  resultsObj = trackResults(validOutputs, colorObjectArray, req, resultsObj)

  if (resultsObj.requestCnt < req.requests) {
    get(req.thing, resultsObj)
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
      _lastDelay: 0 // This trackets manual delay so 2nd + requests don't jump line. 
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

function displayColors(resultsObj) {
  resultsObj.toAdd.forEach( (c, i) =>{
    const requestCnt = resultsObj.requestCnt 
    const delay = resultsObj._lastDelay
    resultsObj._lastDelay += random(100,750)
    let rowBreak = (c.rank - 1) % 3 === 0 ? "<br>" : ""
    rowBreak = c.rank === 1 ? "" : rowBreak
    setTimeout(()=>{
      colorsResult.innerHTML += /*html*/`
        ${rowBreak}
        <div class="colorCircleContainer">
          <div class='colorName'>${c.name}</div>
          <div 
            class='colorCircle' id="${c.name}" 
            style="background-color: ${c.rgb || ''};"
          ></div>
        </div>
      `
      if (!c.rgb && c.name === "transparent") {
        window[c.name].style = "background: url('assets/transparent.png');"
      }

      if ( // * Checking if this is the last one, so we can turn of loader (yes, it's this complicated)
        requestCnt >= _req_config.requests 
        && c.rank >= (Object.keys(resultsObj.colors).length )
      ) {
        setTimeout(()=>{ turnOffLoader() },300 )
      }

    }, delay)

  })
}
