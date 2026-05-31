const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(helmet())
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Serveur opérationnel ✅' })
})

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`)
})