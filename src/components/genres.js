'use strict'

import React from 'react'

const Genres = ({ genres }) => (
  <div className='genres'>
    <h2>Genres</h2>
    <ul>
      {genres.map((genre, index) => (
        <li key={index}>{genre}</li>
      ))}
    </ul>
  </div>
)

export default Genres
