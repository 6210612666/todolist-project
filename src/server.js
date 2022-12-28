import express from 'express'
import mongoose from 'mongoose'
import routes from './route'
import cors from 'cors'


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

// for error network when connect front-end
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(bodyParser.json()) // ดูรายละเอียดของerror
app.use(bodyParser.urlencoded())
app.use(routes)

//connect front
