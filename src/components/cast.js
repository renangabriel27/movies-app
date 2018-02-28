'use strict'

import React from 'react'

const Cast = ({ cast }) => (
  <div className='cast'>
    <h2>Cast</h2>
    <ul>
      {cast.map((cast, index) => (
        <li key={index}>{cast}</li>
      ))}
    </ul>
  </div>
)
export default Cast
