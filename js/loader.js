// 🟢... 🟡... 🔴...  LOADER
function turnOnLoader() {
  _loaderOn = true
  loader.innerHTML = "&nbsp; &nbsp; ...Loading"
}

function turnOffLoader(check) {
  if (!_loaderOn || !check) {
    loader.innerHTML = ""
  }
}