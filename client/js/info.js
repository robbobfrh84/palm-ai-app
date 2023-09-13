const _i = [
  { name: 'border', d: 500 }, // 🔥 Wait quite a bit longer 3-5 sec.
  { name: 'welcome', d: 1000, t: "Welcome", b:"<br" },
  { name: 'color', d: 300, t: "To Color A.I., " },

  { d: 2000, t: "Enter any word" },
  { d: 300, t: "to see what", b:"<br>" },
  { d: 300, t: "colors A.I. finds related to it.", b:"<br><br>" },
  { d: 200, t: "Or, click" },
  { d: 300, t: "👉Examples👈", b:"<br><br>" },
  { d: 1000, t: "You can even try using emojies 😍" },
]

function startInfoBuild() {
  _i.forEach((k, i)=>{
    // const obj = _i[k]
    console.log('k:',k)
    if (k.name === "border") {
      infoSectionContainer.innerHTML += /*html*/`
        <div id="i_${(k.name || i)}" class="hide">
          <div class="infoSectionBorder topLeft"></div>
          <div class="infoSectionBorder topRight"></div>
          <div class="infoSectionBorder bottomRight"></div>
          <div class="infoSectionBorder bottomLeft"></div>
        </div>
      `
    } else {
      infoSectionText.innerHTML += /*html*/`
        <div id="i_${(k.name || i)}" class="hide info-chunk">${k.t}</div>
        ${ k.b ? k.b : "" }
      `
    }
  })

  animateInfoSection()

}

function animateInfoSection() {
  let d = 0
  _i.forEach((k, i)=>{
    d+=k.d
    const sd = d
    setTimeout(()=>{ window["i_"+(k.name || i)].style.opacity = 1 }, sd); 
  })
}