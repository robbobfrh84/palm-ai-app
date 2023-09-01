let _URL = "http://localhost:8080/"
let _theme = 'light'
let _loaderOn = false
let _requestInProgress = false
const _req_config = { colors: 6, requests: 2 }

const _showTests = false // * If true, will show tests and examples in the footer. 
const _getHardCoded = false // * If true, you'll get an alert with a json object you can copy and paste into exampleTests.js. 

function getInitialVars() {
  // window.highlightBorderOn = inputContainer.style.border
  // window.highlightBorderOff = "0.2rem solid rgba(0,0,0,0)"

  window.falseInputCursorLeft = falseInputCursor.style.left
  window.falseInputCursorLeftTyped = "0.6rem"
}

window.onload = ()=>{
  document.body.style.opacity = 1
  const hash = window.location.hash
  const clientURL = window.location.origin + window.location.pathname
  if ( 
    clientURL === "https://robbobfrh84.github.io/palm-ai-app/" 
    || clientURL === "https://colorai.farm/"
    || hash === "#prod") 
  {
    _URL = "https://palm-ai-app.uw.r.appspot.com/"
  }
  getInitialVars()
  buildTests()
  real_input.focus()
}

function switchDarkLightTheme() {
  const themeA = _theme
  _theme = _theme === 'light' ? 'dark' : 'light'
  const themeB = _theme
  document.documentElement.style.setProperty('--themeA', 'var(--'+themeB+')');
  document.documentElement.style.setProperty('--themeB', 'var(--'+themeA+')');
  document.documentElement.style.setProperty('--themeA-bg', 'var(--'+themeB+'-bg)');
  document.documentElement.style.setProperty('--themeB-bg', 'var(--'+themeA+'-bg)');
  toggleLightDark()
}

function checkLoaderOff(requestCnt, lastDelay) {
  if ( requestCnt >= _req_config.requests ) {
    const resultColorTransition = getComputedStyle(document.documentElement).getPropertyValue('--resultColorTransition')
    const loaderDelay = lastDelay + (resultColorTransition.split('s')[0] * 1000) 
    setTimeout(()=>{ 
      turnOffLoader(true) 
      toggleButtonsDisabled(false)
      _requestInProgress = false
    }, loaderDelay) 
  }
}

function toggleButtonsDisabled(status) {
  enterButton.disabled = status;
  real_input.disabled = status;
  // Add Examples button
}


/* - - - - - API - - - - - */ 
function get(thing, resultsObj, keep){
  alert('get()')
  if (!_requestInProgress || keep) {
    _requestInProgress = true
    if (thing) { 
      real_input.value = thing 
      falseInputText.innerHTML = thing
    }
    if (!keep) { clearAllChildren(colorsResult) }
    toggleButtonsDisabled(true)
    turnOnLoader()
    const request = {
      thing: thing || real_input.value,
      colors: _req_config.colors,
      requests: _req_config.requests
    }
    const urlString = _URL+request.thing+"/"+request.colors
    fetch(urlString)
      .then( res => res.json())
      .then( data => handleColors(data, request, resultsObj) )
      .catch( error => { 
        _loaderOn = false
        turnOffLoader(true)
        console.log('🚨 error:', error) // * error needs to log to show any code error after this point. 
      }) // * .finally( ()=> ... )
  }
}