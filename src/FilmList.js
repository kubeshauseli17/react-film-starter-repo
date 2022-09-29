import { useState } from 'react';
import FilmRow from './FilmRow';
import Fave from './Fave';


export default function FilmList(props) {

    const faves = []

    const handleFaveToggle = () => {
        let setFaves = faves.slice()
        const filmIndex = faves.indexOf()
        
    }


    const [filter, setFilter] = useState('all')

    const handleFilterClick = filter => {
        console.log('handling filter click:', filter)
        setFilter({ filter })
    }

        const allFilms = props.films.map((film, i) => {
            return (
                <FilmRow 
                    key={`filmrow${i}`}
                    film={film}
                />
            )
        })

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>

                <div className="film-list-filters">
                    <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}
                        onClick={() => handleFilterClick('all')}
                    >
                        ALL
                        <span className="section-count">{props.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${filter === 'fave' ? 'is-active' : ''}`}
                        onClick={() => handleFilterClick('fave')}
                    >
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>

                {allFilms}
            </div>
        )
}