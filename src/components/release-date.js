'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const ReleaseDate = ({ releasedate }) => (
  <div className='release-date'>
    <h2>Release date</h2>
    <p>{releasedate}</p>
  </div>
)

ReleaseDate.propTypes = {
  releasedate: PropTypes.string.isRequired
}

export default ReleaseDate
