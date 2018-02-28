'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title }) => (
  <h1>{title}</h1>
)

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title
