import { useState, useEffect } from 'react'
import './App.css'
import FilmList from './FilmList'
import Details from './Details'

export default function App() {
  const [films, setFilms] = useState([])
  const [current, setCurrent] = useState({})
  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=ca0f95deafc420a0f20e60ceb7a940c4&language=en-US&page=1`;

  useEffect(() => {
    // const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    fetch(popularFilmsUrl)
      .then(response => response.json())
      .then(jsonDeets => {
        setFilms(jsonDeets.results)
        console.log(films)
      }, [])
  }, [])

  const handleDetailsClick = film => {
    console.log('fetching details for film:', film.title)
    setCurrent(film)
  }


  return (
    <div className="film-library">
      <FilmList
        films={films}
        handleDetailsClick={handleDetailsClick}
      />

      <Details
        films={films}
        film={current}
      />
    </div>
  )
}