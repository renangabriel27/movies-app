'use strict'

import React from 'react'
import Search from './search'
import MovieInfo from './movie-info'
import PropTypes from 'prop-types'

const AppContent = ({ movieinfo, isFetching, handleSearch }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!movieinfo && <MovieInfo info={movieinfo} />}
  </div>
)

AppContent.propTypes = {
  movieinfo: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default AppContent
