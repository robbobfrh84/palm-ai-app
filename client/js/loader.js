// 🟢... 🟡... 🔴...  LOADER
function turnOnLoader() {
  _loaderOn = true

  enterButton.style.color = "rgba(0,0,0,0)"
  setTimeout(()=>{
    const themeAButtonBoxShadowShift = getComputedStyle(document.documentElement).getPropertyValue('--themeA-buttonBoxShadow-shift')
    enterButton.style.boxShadow = themeAButtonBoxShadowShift
    enterButton.style.backgroundColor = "rgba(255,255,255,0)"

    const themeAInputBoxShadowShift = getComputedStyle(document.documentElement).getPropertyValue('--themeA-inputBoxShadow-shift')
    falseInputContainer.style.boxShadow = themeAInputBoxShadowShift
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
      enterButton.style.color = window.enterColor
      enterButton.style.boxShadow = window.enterBoxShadow
      enterButton.style.backgroundColor = window.enterBackgroundColor
      falseInputContainer.style.boxShadow = window.inputBoxShadow
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

