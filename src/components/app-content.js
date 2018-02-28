'use strict'

import React from 'react'
import Search from './search'
import MovieInfo from './movie-info'

const AppContent = ({ movieinfo, handleSearch }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {!!movieinfo && <MovieInfo info={movieinfo} />}
  </div>
)

export default AppContent
