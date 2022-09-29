import { useState } from 'react';
import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB';

const films = (TMDB.films)
const current = {}


export default function App() {

  return (
    <div className="film-library">
      <FilmList films={films} />

      <Details film={current} />
    </div>
  )

}
