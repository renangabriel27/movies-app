'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Overview = ({ overview }) => (
  <div className='overview'>
    <p>{overview}</p>
  </div>
)

Overview.propTypes = {
  overview: PropTypes.string.isRequired
}

export default Overview
