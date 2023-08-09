// 🟢... 🟡... 🔴...  LOADER
function turnOnLoader() {
  _loaderOn = true
  loader.innerHTML = "&nbsp; &nbsp; ...Loading"
}

function turnOffLoader() {
  if (!_loaderOn) {
    loader.innerHTML = ""
  }
}