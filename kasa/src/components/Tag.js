import React from 'react'

const Tag = ({ tags }) => {
  const Tagtri = tags.map((tag) => {
    return (
      <span className="tag" key={`${tag}`}>
        <p>{tag}</p>
      </span>
    )
  })
  return <div id="tags">{Tagtri}</div>
}

export default Tag
