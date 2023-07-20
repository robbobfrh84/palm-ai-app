const express = require('express')
const { htmlColors } = require('./colors.js')
const { reqTextPrompt } = require('./ai.js')

const buildAPI = function() {
  const app = express()
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, ()=>{ console.log(`🌋  API Server url: http://localhost:${PORT}/ 🏡`) })

  app.get('/', (req, res)=>{res.send("Nothing at root url, try adding an endpoint > '/something' ")})
  app.get('/:id',  asyncWrapper(getTextPrompt))
  app.get('*', (req, res) => {res.status(404).send('<h1>404<h1>') }) // * ALWAYS HAVE AS LAST ROUTE
}

async function getTextPrompt(req, res) {
  res.header("Access-Control-Allow-Origin", "*")
  const { validOutputs } = await reqTextPrompt(req.params.id)
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
