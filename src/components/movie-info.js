'use strict'

import React from 'react'
import Image from './image'
import Title from './title'
import Overview from './overview'
import VoteAverage from './vote-average'
import ReleaseDate from './release-date'
import PropTypes from 'prop-types'

const MovieInfo = ({ info }) => (
  <div className='movie-info'>
    <Image image={info.image} />
    <Title title={info.title} />
    <Overview overview={info.overview} />
    <VoteAverage average={info.voteaverage} />
    <ReleaseDate releasedate={info.releasedate} />
  </div>
)

MovieInfo.propTypes = {
  info: PropTypes.object.isRequired
}

export default MovieInfo
