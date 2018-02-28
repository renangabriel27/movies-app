'use strict'

import React from 'react'
import Image from './image'
import Title from './title'
import Overview from './overview'
import Genres from './genres'
import RunTime from './run-time'
import Director from './director'
import Cast from './cast'

const MovieInfo = ({ info }) => (
  <div className='movie-info'>
    <Image image={info.image} />
    <Title title={info.title} />
    <Overview overview={info.overview} />
    <Genres genres={info.genres} />
    <RunTime runtime={info.runtime} />
    <Director director={info.director} />
    <Cast cast={info.cast} />
  </div>
)

export default MovieInfo
