import React from 'react'
import moment from 'moment'

const BloggCard = ({ blogg, handleAddedLikes }) => {
  return (
    <section className="post-container" key={blogg._id}>
      <div className="message-text">
        <p className="text-blogg">{blogg.message}</p>
        <div className="beer-container">
          {/* <div>
            <button
              className="beers"
              onClick={() => handleAddedLikes(blogg._id)}
            >
              {''}
              <span role="img" aria-label="beers">
                🍺
              </span>
              {''}
            </button>
            {''}
            {'X'} {blogg.beers}
            {''}
          </div> */}
          <p className="time">{moment(blogg.createdAt).fromNow()}-</p>
        </div>
      </div>
    </section>
  )
}

export default BloggCard
