function toggleLightDark() {

  const width = getComputedStyle(document.documentElement).getPropertyValue('--width').split('px')[0]
  const height = getComputedStyle(document.documentElement).getPropertyValue('--height').split('px')[0]

  if (_theme === "dark") {
    dayNight.style.backgroundColor = "rgba(120,139,227,0.25)"
    dayNight.style.boxShadow = "inset 0px 0px 0px rgba(0,0,0,0.0)"
    sun.style.left = (width - height + (height * 0.15))+'px'
    moonImage.style.width = (0.65 * height)+'px'
    moon.style.right = (0.05 * height)+'px'
    moon.style.top = (-0.01 * height)+'px'
    moon.style.opacity = '0.8'
  } else {
    dayNight.style.backgroundColor = "rgba(0,0,0,0.2)"
    dayNight.style.boxShadow = "inset 5px 5px 5px rgba(0,0,0,0.3)"
    sun.style.left = (height * 0.16)+'px'
    moonImage.style.width = (0.7 * height)+'px'
    moon.style.right = (0.16 * height)+'px'
    moon.style.top = '0.0px'
    moon.style.opacity = '0.1'
  }
  
}