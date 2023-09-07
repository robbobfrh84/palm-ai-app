window.reload = ()=>{ real_input.focus() }

// * 🚀 Get Color if Enter is Pressed 
document.body.addEventListener("keypress", function(event) {
  if (event.key === "Enter" && real_input.value != "") {
    event.preventDefault()
    get()
  } 
})

// * 👺 Tracking real_input for false input mirroring 
real_input.addEventListener("input", function(event) {
  falseInputText.innerHTML = real_input.value
  adjustCursor()
})
real_input.addEventListener("keyup", function(event) {
  falseInputText.innerHTML = real_input.value
})


// * 🥕 Tracking real_input for Caret (CURSOR) & 🔦 Highlight effecst.
real_input.addEventListener("click", function(event) {
  falseInputBorder.style.opacity = 1
  falseInputCursor.classList.add("cursorBlinker")
  const end = real_input.value.split('').length
  event.target.selectionStart = end
  event.target.selectionEnd = end
  if (_newInput) {
    addColorResultToHistory()
  }
})

real_input.addEventListener("focus", function(event) {
  adjustCursor()
  falseInputBorder.style.opacity = 1
  falseInputCursor.classList.add("cursorBlinker")
})

real_input.addEventListener("focusout", function(event) {
  falseInputBorder.style.opacity = 0
  falseInputCursor.classList.remove("cursorBlinker")
})

function adjustCursor() {
  if (real_input.value.split('').length > 0) {
    falseInputCursor.style.left = window.falseInputCursorLeftTyped
  } else {
    falseInputCursor.style.left = window.falseInputCursorLeft
  }
}