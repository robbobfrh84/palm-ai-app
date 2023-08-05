// 🟢... 🟡... 🔴...  LOADER
function turnOnLoader() {
  _loaderOn = true
  loader.innerHTML = "...Loading"
}

function turnOffLoader() {
  if (!_loaderOn) {
    loader.innerHTML = ""
  }
}