const express = require('express')
const { htmlColors } = require('./colors.js')
const { reqTextPrompt } = require('./ai.js')

const buildAPI = function() {
  const app = express()
  const PORT = process.env.PORT || 8080;
  app.get('/', (req, res)=>{res.send(`<h1> Color A.I. </h1> <hr> <h3> API😊 Nothing at root url, try adding an endpoint > '/cat/4/1' </h3>`)})
  app.get('/:thing/:colors/:requests',  asyncWrapper(getTextPrompt))
  app.get('*', (req, res) => {res.status(404).send('<h1>404<h1>') }) // * ALWAYS HAVE AS LAST ROUTE
  app.listen(PORT, ()=>{ console.log(`🌋  API Server url: http://localhost:${PORT}/ 🏡`) })
}

async function getTextPrompt(req, res) {
  res.header("Access-Control-Allow-Origin", "*")
  // 🔥 Do a HARD Max for tries here. 
  // I say two tries to get min colors, third with 'no-thing-no-thing'
  const { thing, colors, requests } = req.params
  const { validOutputs } = await reqTextPrompt(thing, colors)
  const colorObjectArray = []
  htmlColors.forEach(c=>{
    if (validOutputs.includes(c.name)) {
      colorObjectArray.push(c)
    }
  })
  return { validOutputs, colorObjectArray }
}


/* ⚙️ toolkit 🛠️ */
function asyncWrapper(func) {
  return (req, res, next) => {
    return Promise.resolve(func(req, res))
      .then((result) => res.send(result))
      .catch((err) => next(err))
  }
}

module.exports = { buildAPI }


/* 💾 PRESERVED NOTES 📝 */

// app.get('/:id/:options',  asyncWrapper(asyncReq))

// app.get('/:id', asyncWrapper(async (req)=>{
//   const { validOutputs } = await reqTextPrompt(req.params.id)
//   return validOutputs
// }))
