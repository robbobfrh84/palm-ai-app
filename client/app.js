let _URL = "http://localhost:8080/"
let _loaderOn = false
let _theme = 'light'
let _req_config = { colors: 6, requests: 2 }

window.onload = ()=>{
  document.body.style.opacity = 1
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
    event.preventDefault()
    get()
  } 
})

lightDarkToggle.onchange = ()=>{
  const themeA = _theme
  _theme = _theme === 'light' ? 'dark' : 'light'
  const themeB = _theme
  document.documentElement.style.setProperty('--themeA', 'var(--'+themeB+')');
  document.documentElement.style.setProperty('--themeB', 'var(--'+themeA+')');
}


/* - - - - - API - - - - - */ 
// function UIGet(thing) { 
//   thingInput.value = thing
//   get(thing)
// }

function get(thing, resultsObj){
  if (thing) { thingInput.value = thing }
  colorsResult.innerHTML = ""
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
    // .catch( error => { 
    //   _loaderOn = false
    //   turnOffLoader()
    //   console.log('🚨 error:', error) // * error needs to log to show any code error after this point. 
    // }) 
    // .finally( ()=> turnOffLoader() )
}