function buildSVGIcon() {
  iconSvg.innerHTML = /*html*/`
    <style>
      text {
        font-family: Avenir;
        font-size: 50px;
        fill: var(--themeB);
        letter-spacing: 3px;
      }
    </style>
    <text x="12" y="65" fill="red">A.I.</text>
    <circle cx="12" cy="69" r="0" fill="red">
      <animate attributeName="r" begin="1000ms" dur="300ms" from="0" to="13" fill="freeze"/>
      <animate attributeName="r" begin="1300ms" dur="300ms" from="13" to="0" fill="freeze"/>
      <animate attributeName="r" begin="2000ms" dur="300ms" from="0" to="13" fill="freeze"/>
      <animate attributeName="r" begin="2300ms" dur="300ms" from="13" to="7" fill="freeze"/>
    </circle>
    <circle cx="29" cy="25" r="0" fill="green">
      <animate attributeName="r" begin="1200ms" dur="300ms" from="0" to="13" fill="freeze"/>
      <animate attributeName="r" begin="1500ms" dur="300ms" from="13" to="0" fill="freeze"/>
      <animate attributeName="r" begin="2300ms" dur="300ms" from="0" to="13" fill="freeze"/>
      <animate attributeName="r" begin="2600ms" dur="300ms" from="13" to="7" fill="freeze"/>
    </circle>
    <circle cx="46" cy="69" r="0" fill="dodgerblue">
      <animate attributeName="r" begin="1400ms" dur="300ms" from="0" to="13" fill="freeze"/>
      <animate attributeName="r" begin="1700ms" dur="300ms" from="13" to="0" fill="freeze"/>
      <animate attributeName="r" begin="2600ms" dur="300ms" from="0" to="13" fill="freeze"/>
      <animate attributeName="r" begin="2900ms" dur="300ms" from="13" to="7" fill="freeze"/>
    </circle>
    <circle cx="73" cy="25" r="0" fill="purple">
      <animate attributeName="r" begin="1600ms" dur="300ms" from="0" to="13" fill="freeze"/>
      <animate attributeName="r" begin="1900ms" dur="300ms" from="13" to="0" fill="freeze"/>
      <animate attributeName="r" begin="2900ms" dur="300ms" from="0" to="13" fill="freeze"/>
      <animate attributeName="r" begin="3200ms" dur="300ms" from="13" to="7" fill="freeze"/>
    </circle>
    <circle cx="73" cy="69" r="0" fill="goldenrod">
      <animate attributeName="r" begin="1800ms" dur="300ms" from="0" to="13" fill="freeze"/>
      <animate attributeName="r" begin="2100ms" dur="300ms" from="13" to="0" fill="freeze"/>
      <animate attributeName="r" begin="3200ms" dur="300ms" from="0" to="13" fill="freeze"/>
      <animate attributeName="r" begin="3500ms" dur="300ms" from="13" to="7" fill="freeze"/>
    </circle>
  `
}