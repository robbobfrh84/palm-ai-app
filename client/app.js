let _URL = "http://localhost:8080/"
let _loaderOn = false
let _theme = 'light'
let _requestInProgress = false
let _req_config = { colors: 6, requests: 2 }

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
  thingInput.focus()
}

window.reload = ()=>{
  thingInput.focus()
}

document.body.addEventListener("keypress", function(event) {
  if (event.key === "Enter" && thingInput.value != "") {
    event.preventDefault()
    get()
  } 
})

// lightDarkToggle.onchange = ()=>{
function switchDarkLightMode() {
  const themeA = _theme
  _theme = _theme === 'light' ? 'dark' : 'light'
  const themeB = _theme
  document.documentElement.style.setProperty('--themeA', 'var(--'+themeB+')');
  document.documentElement.style.setProperty('--themeB', 'var(--'+themeA+')');
  document.documentElement.style.setProperty('--themeA-bg', 'var(--'+themeB+'-bg)');
  document.documentElement.style.setProperty('--themeB-bg', 'var(--'+themeA+'-bg)');
  changeDayNight()
}

function checkLoaderOff(requestCnt, lastDelay) {
  if ( requestCnt >= _req_config.requests ) {
    const resultColorTransition = getComputedStyle(document.documentElement).getPropertyValue('--resultColorTransition')
    const loaderDelay = lastDelay + (resultColorTransition.split('s')[0] * 1000) 
    setTimeout(()=>{ 
      turnOffLoader() 
      toggleButtonsDisabled(false)
      _requestInProgress = false
    }, loaderDelay) 
  }
}

function toggleButtonsDisabled(status) {
  enterButton.disabled = status;
  thingInput.disabled = status;
}


/* - - - - - API - - - - - */ 
function get(thing, resultsObj, keep){
  if (!_requestInProgress || keep) {
    _requestInProgress = true
    if (thing) { thingInput.value = thing }
    if (!keep) { clearAllChildren(colorsResult) }
    toggleButtonsDisabled(true)
    turnOnLoader()
    const request = {
      thing: thing || thingInput.value,
      colors: _req_config.colors,
      requests: _req_config.requests
    }
    const urlString = _URL+request.thing+"/"+request.colors
    fetch(urlString)
      .then( res => res.json())
      .then( data => handleColors(data, request, resultsObj))
      .catch( error => { 
        _loaderOn = false
        turnOffLoader()
        console.log('🚨 error:', error) // * error needs to log to show any code error after this point. 
      }) // * .finally( ()=> ... )
  }
}



//
//
function changeDayNight() {

  const width = getComputedStyle(document.documentElement).getPropertyValue('--width').split('px')[0]
  const height = getComputedStyle(document.documentElement).getPropertyValue('--height').split('px')[0]

  if (_theme === "dark") {
    // setting = "night"
    // document.body.style.background = 'url("assets/dark-grain.png")'; 
    dayNight.style.backgroundColor = "rgba(120,139,227,0.25)"
    dayNight.style.boxShadow = "inset 0px 0px 0px rgba(0,0,0,0.0)"

    sun.style.left = (width - height + (height * 0.06))+'px'

    moonImage.style.width = (0.8 * height)+'px'
    moon.style.right = (0.05 * height)+'px'
    moon.style.top = (-0.02 * height)+'px'
    moon.style.opacity = '0.8'
  } else {
    // setting = "day"
    // document.body.style.background = 'url("assets/light-grain.png")';
    dayNight.style.backgroundColor = "rgba(0,0,0,0.2)"
    dayNight.style.boxShadow = "inset 5px 5px 5px rgba(0,0,0,0.3)"

    sun.style.left = (height * 0.08)+'px'

    moonImage.style.width = (0.86 * height)+'px'
    moon.style.right = (0.08 * height)+'px'
    moon.style.top = '0.0px'
    moon.style.opacity = '0.1'
  }
}