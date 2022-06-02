import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import listEndpoints from 'express-list-endpoints'
import bodyParser from 'body-parser'

import diveData from './data/info.json'

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/backend'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const port = process.env.PORT || 8080
const app = express()

// Middlewares:
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlenght: 5,
    maxlenght: 20,
  },
  password: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
  },
})

// makeing a new USER

const User = mongoose.model('User', UserSchema)

app.post('/register', async (req, res) => {
  const { username, password } = req.body

  try {
    const salt = bcrypt.genSaltSync()

    if (password.length < 6) {
      res.status(400).json({
        response: 'Password must be at least 6 characters long',
        success: false,
      })
    } else {
      // console.log(password)
      // console.log(username)
      const newUser = await new User({
        username: username,
        password: bcrypt.hashSync(password, salt),
      }).save()
      res.status(201).json({
        response: {
          username: newUser.username,
          accessToken: newUser.accessToken,
          userId: newUser._id,
        },
        success: true,
      })
    }
  } catch (error) {
    res.status(400).json({
      response: error,
      success: false,
    })
  }
})

// User LOGIN

app.post('/login', async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await User.findOne({ username })

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        success: true,
        username: user.username,
        accessToken: user.accessToken,
        userId: user._id,
      })
    } else {
      res.status(400).json({
        response: 'Password don´t',
        success: false,
      })
    }
  } catch (error) {
    res.status(400).json({
      response: error,
      success: false,
    })
  }
})

//checking for AUTHENTICATION

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization')
  try {
    const user = await User.findOne({ accessToken: accessToken })
    if (user) {
      next()
    } else {
      res.status(401).json({ success: false, message: 'Not authorized' })
    }
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid request', error })
  }
}

//SiteINFO

const SiteInfo = mongoose.model('SiteInfo', {
  diveId: Number,
  name: String,
  location: String,
  deapth: String,
  level: String,
  info: String,
  marineLife: Number,
  visibility: String,
})

// if (process.env.RESET_DB) {
//   const seedDatabase = async () => {
//     await SiteInfo.deleteMany()
//     diveData.forEach((siteinfo) => {
//       const newSiteInfo = new SiteInfo(siteinfo)
//       newSiteInfo.save()
//     })
//   }

//   seedDatabase()
// }

//Showing all ENDPOINTS

app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

// Showing all DIVE INFO
app.get('/myData', async (req, res) => {
  try {
    if (!diveData) {
      res.status(404).send('No data to show')
    } else {
      res.json(diveData)
    }
  } catch (error) {
    res.status(400).json({ error: 'Not found' })
  }
})

// // So u can search by ID
// app.get('/myNetflix/shows/:show_id', (req, res) => {
//   const id = req.params.show_id
//   Stream.find({ show_id: id })
//     .then((results) => {
//       res.json(results)
//     })
//     .catch((err) => {
//       res.json({ message: 'Cant find query', err: err })
//     })
// })
// // Get route with title
// app.get('/myNetflix/title/:title', async (req, res) => {
//   const singleTitle = await Stream.findOne({
//     title: req.params.title,
//   })
//   res.send(singleTitle)
// })

// //Geting route with year

// app.get('/myNetflix/year/:release_year', async (req, res) => {
//   const relaseDate = await Stream.find({
//     release_year: req.params.release_year,
//   })
//   res.send(relaseDate)
// })

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
