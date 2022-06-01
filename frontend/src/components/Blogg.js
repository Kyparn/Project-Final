import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import user from 'reducer/user'

const Blogg = () => {
  const accessToken = useSelector((store) => store.user.accessToken)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!accessToken) {
      navigate('/login')
    }
  }, [accessToken])

  return (
    <div className="blogg-container">
      <h1>Make a post</h1>
    </div>
  )
}

export default Blogg
