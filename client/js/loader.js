// 🟢... 🟡... 🔴...  LOADER
function turnOnLoader() {
  _loaderOn = true

  enterButton.style.color = "rgba(0,0,0,0)"
  enterButton.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.3), 0px 0px 0px rgba(0,0,0,0.25)"
  enterButton.style.backgroundColor = "rgba(255,255,255,0)"

  setTimeout(()=>{
    falseInputContainer.style.boxShadow = "inset 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 3px 3px rgba(0,0,0,0.25)"
    falseInputContainer.style.backgroundColor = "rgba(0,0,0,0.075)"
  },500)

  setTimeout(()=>{
    _loader.on("loader1")
  },300)
}

function turnOffLoader(check) {
  if (!_loaderOn || !check) {
    _loader.off("loader1")
    setTimeout(()=>{
      enterButton.style.color = "rgba(0,0,0,0.75)"
      enterButton.style.backgroundColor = "rgba(255,255,255,0.25)"
      enterButton.style.boxShadow = "inset 0px 0px 0px 0px rgba(0,0,0,0.3), 2px 2px 2px rgba(0,0,0,0.25)"
      
      falseInputContainer.style.boxShadow = "inset 0px 0px 3px 3px rgba(0,0,0,0.5), 0px 0px 0px 0px rgba(0,0,0,0.5)"
      // falseInputContainer.style.backgroundColor = "rgba(0,0,0,0)"
    },300)
  }
}

const _loader = {
  state: "off",
  on: function(id) {
    window[id].style.display = "block"
    window[id].style.opacity = 1
    this.state = "on"
  },
  off: function(id) {
    window[id].style.opacity = 0
    this.state = "off"
    setTimeout(()=>{
      if (this.state == "off") {
        window[id].style.display = "none"
      }
      else {
        window[id].style.opacity = 1
        window[id].style.display = "block"
      }
    }, 1000)
  }
}

