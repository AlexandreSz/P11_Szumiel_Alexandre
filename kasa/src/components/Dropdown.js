import React from 'react'
import arrowDown from '../assets/images/Vectordown.png'

function Dropdown({ title, content, details, summary, text }) {
  return (
    <details className={details}>
      <summary className={summary}>
        {title} <img src={arrowDown} className="chevron-down" alt=""></img>
      </summary>
      {typeof content === 'object' ? (
        <ul className={text}>
          {content.map((element) => {
            return <li key={`${element}`}> {element}</li>
          })}
        </ul>
      ) : (
        <p className={text}>{content}</p>
      )}
    </details>
  )
}

export default Dropdown
