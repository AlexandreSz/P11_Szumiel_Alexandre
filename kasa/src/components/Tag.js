import React from 'react'

const Tag = ({ tags }) => {
  return (
    <div id="tags">
      {tags.map((tag) => {
        return (
          <span className="tag" key={`${tag}`}>
            <p>{tag}</p>
          </span>
        )
      })}
    </div>
  )
}

export default Tag
