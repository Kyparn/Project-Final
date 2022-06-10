import React from 'react'
import moment from 'moment'

const BloggCard = ({ blogg, handleAddedLikes }) => {
  return (
    <section className="blogg-container" key={blogg._id}>
      <div className="message-text">
        <p className="text-blogg">{blogg.message} </p>
        <div className="likes-container">
          <div>
            <button
              className="icons"
              onClick={() => handleAddedLikes(blogg._id)}
            >
              {' '}
              <span role="img" aria-label="hearts">
                ❤️
              </span>{' '}
            </button>{' '}
            {'X'} {blogg.hearts}{' '}
          </div>
          <p className="time">{moment(blogg.createdAt).fromNow()}-</p>
        </div>
      </div>
    </section>
  )
}

export default BloggCard
