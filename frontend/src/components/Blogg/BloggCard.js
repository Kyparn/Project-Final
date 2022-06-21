import React from 'react'
import moment from 'moment'

import './blogg.css'

const BloggCard = ({ blogg }) => {
  return (
    <section className="post-container" key={blogg._id}>
      <div className="message-text">
        <p className="text-blogg">{blogg.message}</p>
        <div className="button-container">
          <button
            className="delete"
            type="button"
            onClick={() => {
              onDelete(blogg._id)
            }}
          >
            ✖️
          </button>
          <p className="time">{moment(blogg.createdAt).fromNow()}-</p>
        </div>
      </div>
    </section>
  )
}

export default BloggCard
