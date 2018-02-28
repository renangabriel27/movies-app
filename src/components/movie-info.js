'use strict'

import React from 'react'
import Image from './image'
import Title from './title'
import Overview from './overview'
import RunTime from './run-time'
import VoteAverage from './vote-average'
import ReleaseDate from './release-date'

const MovieInfo = ({ info }) => (
  <div className='movie-info'>
    <Image image={info.image} />
    <Title title={info.title} />
    <Overview overview={info.overview} />
    <RunTime runtime={info.runtime} />
    <VoteAverage average={info.voteaverage} />
    <ReleaseDate releasedate={info.releasedate} />
  </div>
)

export default MovieInfo
