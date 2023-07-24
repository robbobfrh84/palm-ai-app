let URL = "https://palm-ai-app.uw.r.appspot.com/"

window.onload = ()=>{
  const hash = window.location.hash
  if (hash === "#dev") {
    URL = "http://localhost:8080/"
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
  } else {
    console.log('no input')
  }
});

function get(thing, colors, requests){
  thing = thing || thingInput.value
  colors = colors || colorsInput.value
  requests = requests || requestsInput.value
  const urlString = URL+thing+"/"+colors+"/"+requests
  console.log('urlString:',urlString)

  // fetch(URL+thing+"/"+colors+"/"+requests)
  fetch(urlString)
    .then( res => res.json())
    .then( data => displayColors(data))
}

function displayColors({ validOutputs, colorObjectArray }) {
  console.log('validOutputs, colorObjectArray:',validOutputs, colorObjectArray)
  if (validOutputs.length > 1) {
    colorNames.innerHTML = ""
    validOutputs.forEach(c=>{
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
        console.log("TR")
        console.log('window[c]:',window[c])
        window[c].style = "background: url('assets/transparent.png');"
      }
    })
  } else { alert("something went wrong")}
}
