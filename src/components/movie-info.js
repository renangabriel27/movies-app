'use strict'

import React from 'react'

const MovieInfo = () => (
  <div className='movie-info'>
    <img
      src='https://image.tmdb.org/t/p/w500/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg'
    />

    <h1>Fight Club</h1>

    <div className='overview'>
      <p>
         Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso
        pudia ce receita de bolis, mais bolis eu num gostis. Per aumento de
        cachacis, eu reclamis. Leite de capivaris, leite de mula manquis sem
        cabeça. Quem num gosta di mé, boa gentis num é.
      </p>
    </div>

    <div className='genres'>
      <h2>Genres</h2>
      <p>Action / Adventure</p>
    </div>

    <div className='run-time'>
      <h2>Run time</h2>
      <p>123 min</p>
    </div>

    <div className='director'>
      <h2>Director</h2>
      <p>David Fisher</p>
    </div>

    <div className='cast'>
      <h2>Cast</h2>
      <p>Brad Pitt / David Norton </p>
    </div>
  </div>
)

export default MovieInfo
