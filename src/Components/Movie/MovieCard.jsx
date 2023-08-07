import { Link } from 'react-router-dom'
import './MovieCard.css'


const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/ ${movie.id}`} style={{
      textDecoration: "none",
      color: "white"
    }
    }>
      <div title={movie.title} className="cards">
        <img src={movie.poster_path !== null ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "https://via.placeholder.com/400"} alt={movie.title} className="cards-img" />
      </div>
    </Link>
  )
}

export default MovieCard