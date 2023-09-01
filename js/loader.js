// 🟢... 🟡... 🔴...  LOADER
function turnOnLoader() {
  _loaderOn = true
  enterButton.style.opacity = 0
  setTimeout(()=>{
    _loader.on("loader1")
  },300)
}

function turnOffLoader(check) {
  if (!_loaderOn || !check) {
    _loader.off("loader1")
    setTimeout(()=>{
      enterButton.style.opacity = 1
    },800)
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

