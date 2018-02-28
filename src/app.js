'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      movieinfo: {
        title: 'Fight Club',
        image: 'https://image.tmdb.org/t/p/w500/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
        overview:
          `Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso
          pudia ce receita de bolis, mais bolis eu num gostis. Per aumento de
          cachacis, eu reclamis. Leite de capivaris, leite de mula manquis sem
          cabeça. Quem num gosta di mé, boa gentis num é.`,
        genres: ['Action', 'Adventure'],
        runtime: '123 min',
        director: 'David Fisher',
        cast: ['Brad Pitt', 'Edward Norton']
      }
    }
  }

  render () {
    return (
      <AppContent
        movieinfo={this.state.movieinfo}
      />
    )
  }
}

export default App
