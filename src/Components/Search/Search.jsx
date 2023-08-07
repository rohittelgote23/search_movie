import React, { useState, useEffect } from 'react'
import MovieCard from '../Movie/MovieCard'
import './Search.css'
const Search = () => {
    const [movie, setMovie] = useState([])
    const [time, setTime] = useState('')
    const handleOnChange = (e) => {
        clearInterval(time)
        const timeOut = setTimeout(() => searchMovie(e.target.value), 500)
        setTime(timeOut)
    }
    function searchMovie(name) {
        fetch(`https://api.themoviedb.org/3/${name ? "search/movie" : "movie/upcoming"}?api_key=2c694ff614f9e7c71cdb5372c5a2fb8b&language=en-US&query=${name}`)
            .then(res => res.json())
            .then(data => setMovie(data.results));
    }
    useEffect(() => {
        searchMovie()
    }, [])


    return (
        <>
            <div className="main-search">
                <input
                    type="search"
                    onChange={handleOnChange}
                    className='input-search'
                    placeholder='Search here....'
                />
            </div>
            <div className='list-cards'>
                {movie.length <= 0 ?
                    <div>
                        <h1>No Results Found</h1>
                    </div>
                    :
                    movie.map(movie => (
                        <MovieCard movie={movie} key={movie.title} />
                    ))

                }

            </div>
        </>
    )
}

export default Search