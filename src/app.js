'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      movieinfo: null,
      isFetching: false
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
      this.setState({ isFetching: true })

      ajax().get(this.getTheMovieDBApi(value))
        .then((movies) => {
          const result = movies.results

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
        .always(() => this.setState({ isFetching: false }))
    }
  }

  render () {
    return (
      <AppContent
        {...this.state}
        handleSearch={this.handleSearch}
      />
    )
  }
}

export default App
