'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const VoteAverage = ({ average }) => (
  <div className='vote-average'>
    <h2>Vote Average</h2>
    <p>{average}</p>
  </div>
)

VoteAverage.propTypes = {
  average: PropTypes.number.isRequired
}

export default VoteAverage
