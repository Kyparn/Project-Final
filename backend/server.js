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

app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next()
  } else {
    res.status(503).json({ error: 'Service not online' })
  }
})

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
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

const User = mongoose.model('User', UserSchema)

app.post('/register', async (req, res) => {
  const { username, password } = req.body

  try {
    const salt = bcrypt.genSaltSync()

    if (password.length < 6) {
      res.status(400).json({
        response: 'Password must be at least  characters long',
        success: false,
      })
    } else {
      console.log(password)
      console.log(username)
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
        response: "username and password don't match",
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

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization')
  try {
    const user = await User.findOne({ accessToken: accessToken })
    if (user) {
      next()
    } else {
      res.status(401).json({
        response: 'Please log in to proceed',
        success: false,
      })
    }
  } catch (error) {
    res.status(400).json({
      response: error,
      success: false,
    })
  }
}

const BloggSchema = new mongoose.Schema({
  message: {
    type: String,
    minlength: 5,
    maxlength: 140,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Blogg = mongoose.model('Blogg', BloggSchema)

app.get('/blogg', async (req, res) => {
  const blogg = await Blogg.findOneAndUpdate()
    .sort({ createAt: 'desc' })
    .limit(20)
    .exec()
  res.json(blogg)
})

app.post('/blogg', async (req, res) => {
  const { message } = req.body

  try {
    const newBlogg = await new Blogg({ message }).save()
    res.status(200).json({ respone: newBlogg, success: true })
  } catch (error) {
    res.status(400).json({ respone: error, success: false })
  }
})

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

if (process.env.RESET_DB) {
  const seedDatabase = async () => {
    await SiteInfo.deleteMany()
    diveData.forEach((siteinfo) => {
      const newSiteInfo = new SiteInfo(siteinfo)
      newSiteInfo.save()
    })
  }

  seedDatabase()
}

app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

app.get('/myData', (req, res) => {
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

app.get('/myData/dive/:slug', (req, res) => {
  try {
    const divedata = diveData.find(({ slug }) => req.params.slug === slug)
    if (divedata) {
      res.status(200).json({
        response: divedata,
        success: true,
      })
    } else {
      res.status(404).json({ response: error, success: false })
    }
  } catch (error) {
    res.status(400).json({ response: error, success: false })
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
