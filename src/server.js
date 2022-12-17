import express from 'express'
import mongoose from 'mongoose'
import routes from './route'

const app = express()
const bodyParser = require('body-parser')
const PORT = 5000
const database = 'mongodb+srv://kodchamol:Tntn123456@cluster0.ej29klg.mongodb.net/to_do_list'

mongoose.Promise = global.Promise
mongoose.connect(database, { useNewUrlParser: true }).then(
  () => {
    console.log('[success] : connected to the database ')
  },
  (error) => {
    console.log(`[failed] : ${error}`)
    process.exit()
  },
)


app.listen(PORT, (err) => {
    if (err) console.log('Error in server setup')
    console.log('Server listening on Port', PORT)
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept')
  next()
})

app.use(bodyParser.json()) // ดูรายละเอียดของerror
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

//connect front
