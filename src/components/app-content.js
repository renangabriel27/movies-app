'use strict'

import React from 'react'
import Search from './search'
import MovieInfo from './movie-info'

const AppContent = ({ movieinfo }) => (
  <div className='app'>
    <Search />
    <MovieInfo info={movieinfo} />
  </div>
)

export default AppContent
