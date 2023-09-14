function startInfoBuild() {
  const infoBorder = document.createElement('div')
  infoBorder.classList.add('hide')
  infoBorder.id = "infoBorder"
  infoBorder.innerHTML += /*html*/`
    <div class="infoSectionBorder topLeft"></div>
    <div class="infoSectionBorder topRight"></div>
    <div class="infoSectionBorder bottomRight"></div>
    <div class="infoSectionBorder bottomLeft"></div>
  `
  infoSectionContainer.append(infoBorder)

  const infoTitle = document.createElement('div')
  infoTitle.classList.add('hide')
  infoTitle.id = "infoTitle"
  infoTitle.innerHTML += /*html*/`Welcome to Color A.I. `
  infoSectionText.append(infoTitle)

  const infoText = document.createElement('div')
  infoText.id = "infoText"
  infoText.innerHTML += /*html*/`

    <div id="infoText_1" class="hide">
      <br>
      Enter a word, and watch the associated colors generate.
    </div>

    <br>

    <div id="infoText_2" class="hide">
           
      <span class='before-arrows-text'>Or, click</span>      
      <span class='pulse-arrow left'>.</span>
      <span class="example-link" onclick="randomExample()">Examples</span>
      <span class='pulse-arrow right'>.</span>
      <span class='after-arrows-text'>to get a random word.</span>      
    </div>

    <br>

    <div id="infoText_3" class="hide">You can even enter emojis.
      <span id='pulseEmoji' onclick="get('🍇')">🍇</span>
    </div>      
  `
  infoSectionText.append(infoText)

  fadeInInfoCard()

}

function fadeInInfoCard() {
  let pageTransition = _delayInfoCard
  
  setTimeout(()=>{
    infoBorder.classList.add("show-full")
  }, pageTransition) 

  setTimeout(()=>{
    infoTitle.classList.add("show-dim")
  }, pageTransition += 1000) 

  setTimeout(()=>{
    infoText_1.classList.add("show-dim")
  }, pageTransition += 1000) 

  setTimeout(()=>{
    infoText_2.classList.add("show-dim")
  }, pageTransition += 300) 

  setTimeout(()=>{
    infoText_3.classList.add("show-dim")
  }, pageTransition += 300) 

}