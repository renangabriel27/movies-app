'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      movieinfo: null
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  getTheMovieDBApi (value) {
    const apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key='
    const apiKey = '35120e8fbcd299809ae81ecd861da3af'
    const query = `&query=${value}`

    return `${apiUrl}${apiKey}${query}`
  }

  getImagePoster (link) {
    return `https://image.tmdb.org/t/p/w500${link}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      ajax().get(this.getTheMovieDBApi(value))
        .then((movies) => {
          const result = movies.results
          console.log(result)
          this.setState({
            movieinfo: {
              title: result[0].title,
              overview: result[0].overview,
              image: this.getImagePoster(result[0].poster_path),
              voteaverage: result[0].vote_average,
              releasedate: result[0].release_date
            }
          })
        })
    }
  }

  render () {
    return (
      <AppContent
        movieinfo={this.state.movieinfo}
        handleSearch={this.handleSearch}
      />
    )
  }
}

export default App
