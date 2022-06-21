import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../utils/API'

import './login.css'

import user from '../utils/reducer'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState('register')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const accessToken = useSelector((store) => store.user.accessToken)

  useEffect(() => {
    if (accessToken) {
      navigate('/blogg')
    }
  }, [accessToken])

  const onFormSubmit = (event) => {
    event.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password }),
    }

    fetch(API_URL(mode), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUserId(data.userId))
            dispatch(user.actions.setAccessToken(data.accessToken))
            dispatch(user.actions.setUserName(data.username))
            dispatch(user.actions.setError(null))
            navigate('/blogg')
            console.log(data)
          })
        } else {
          batch(() => {
            dispatch(user.actions.setError(data.response))
            dispatch(user.actions.setUserId(null))
            dispatch(user.actions.setAccessToken(null))
            dispatch(user.actions.setUserName(null))
          })
          setError(data.response)
        }
      })
  }
  return (
    <>
      <div className="login-container">
        <form onSubmit={onFormSubmit}>
          <div className="form-container">
            <div className="login-top">
              <label htmlFor="register">New user</label>
              <input
                type="radio"
                id="register"
                checked={mode === 'register'}
                onChange={() => setMode('register')}
              />
              <label htmlFor="login">Login</label>
              <input
                type="radio"
                id="login"
                checked={mode === 'login'}
                onChange={() => setMode('login')}
              />
            </div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Submit</button>
            <p className="error-message">{error}</p>
          </div>
        </form>
      </div>
    </>
  )
}
export default Login
