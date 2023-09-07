let _URL = "http://localhost:8080/"
let _theme = 'light'
let _loaderOn = false
let _requestInProgress = false
let _newInput = false
let _historyCnt = 0
const _req_config = { colors: 6, requests: 2 }

const _showTests = false // * If true, will show tests and examples in the footer. 
const _getHardCoded = false // * If true, you'll get an alert with a json object you can copy and paste into exampleTests.js. 

function getInitialVars() {
  window.enterColor = enterButton.style.color 
  window.enterBoxShadow = enterButton.style.boxShadow
  window.enterBackgroundColor = enterButton.style.backgroundColor 
  window.inputBoxShadow = falseInputCursor.style.boxShadow
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
  buildSVGIcon()
  buildColorResultContainer()
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
  real_input.disabled = status;
  enterButton.disabled = status;
  enterButton.style.cursor = status ? 'default' : 'pointer'
  examplesButton.style.pointerEvents = status ? 'none' : ''
  examplesButton.style.cursor = status ? 'default' : 'pointer'
}


/* - - - - - API - - - - - */ 
function get(thing, resultsObj, keep){
  if (_newInput)  {
    clearAllChildren(window["colorsResult_"+_historyCnt])
    window["colorsResult_"+_historyCnt].style.height = 0
  }
  if ( (!_requestInProgress || keep) && real_input.value != "" ) {
    _requestInProgress = true
    if (thing) { 
      real_input.value = thing 
      falseInputText.innerHTML = thing
    }
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
      .then( data => {
        _newInput = true
        handleColors(data, request, resultsObj) 
      })
      .catch( error => { 
        _loaderOn = false
        setTimeout(()=>{turnOffLoader(true)},300)
        toggleButtonsDisabled(false)
        console.log('🚨 error:', error) // * error needs to log to show any code error after this point. 
      }) // * .finally( ()=> ... )
  } else if (real_input.value == "") {
    setTimeout(()=>{
      real_input.focus()
    },300)
  }
}