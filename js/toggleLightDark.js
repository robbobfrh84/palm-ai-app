function toggleLightDark(themeA, themeB) {

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

  document.documentElement.style.setProperty('--themeA', 'var(--'+themeB+')');
  document.documentElement.style.setProperty('--themeB', 'var(--'+themeA+')');
  document.documentElement.style.setProperty('--themeA-dividerBoxShadow', 'var(--'+themeB+'-dividerBoxShadow)');
  document.documentElement.style.setProperty('--themeB-dividerBoxShadow', 'var(--'+themeA+'-dividerBoxShadow)');
  document.documentElement.style.setProperty('--themeA-dividerBoxShadow-flip', 'var(--'+themeB+'-dividerBoxShadow-flip)');
  document.documentElement.style.setProperty('--themeB-dividerBoxShadow-flip', 'var(--'+themeA+'-dividerBoxShadow-flip)');
  document.documentElement.style.setProperty('--themeA-bg', 'var(--'+themeB+'-bg)');
  document.documentElement.style.setProperty('--themeB-bg', 'var(--'+themeA+'-bg)');
  document.documentElement.style.setProperty('--themeA-arrow', 'var(--'+themeB+'-arrow)');
  document.documentElement.style.setProperty('--themeB-arrow', 'var(--'+themeA+'-arrow)');
  document.documentElement.style.setProperty('--themeA-inputBorderColor', 'var(--'+themeB+'-inputBorderColor)');
  document.documentElement.style.setProperty('--themeB-inputBorderColor', 'var(--'+themeA+'-inputBorderColor)');
  document.documentElement.style.setProperty('--themeA-inputBoxShadow', 'var(--'+themeB+'-inputBoxShadow)');
  document.documentElement.style.setProperty('--themeB-inputBoxShadow', 'var(--'+themeA+'-inputBoxShadow)');
  document.documentElement.style.setProperty('--themeA-inputBoxShadow-shift', 'var(--'+themeB+'-inputBoxShadow-shift)');
  document.documentElement.style.setProperty('--themeB-inputBoxShadow-shift', 'var(--'+themeA+'-inputBoxShadow-shift)');
  document.documentElement.style.setProperty('--themeA-buttonBoxShadow-shift', 'var(--'+themeB+'-buttonBoxShadow-shift)');
  document.documentElement.style.setProperty('--themeB-buttonBoxShadow-shift', 'var(--'+themeA+'-buttonBoxShadow-shift)');
  document.documentElement.style.setProperty('--themeA-cursor', 'var(--'+themeB+'-cursor)');
  document.documentElement.style.setProperty('--themeB-cursor', 'var(--'+themeA+'-cursor)');
  document.documentElement.style.setProperty('--themeA-infoBorderColor', 'var(--'+themeB+'-infoBorderColor)');
  document.documentElement.style.setProperty('--themeB-infoBorderColor', 'var(--'+themeA+'-infoBorderColor)');
  
}
