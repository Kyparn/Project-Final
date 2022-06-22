import React from 'react'
import moment from 'moment'

import './blogg.css'

const BloggCard = ({ blogg }) => {
  return (
    <section className="post">
      <section className="post-container" key={blogg._id}>
        <div className="message-text">
          <p className="text-blogg">{blogg.message}</p>
          <p className="time">{moment(blogg.createdAt).fromNow()}-</p>
        </div>
      </section>
    </section>
  )
}

export default BloggCard
