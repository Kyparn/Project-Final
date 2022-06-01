import PostMessage from '../models/postMessage.js'

export const getPosts = (req, res) => {
  res.send('This WORKS!')
}

export const createPosts = (req, res) => {
  res.send('Post Creation')
}
