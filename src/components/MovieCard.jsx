
// import Photo from '../assets/images/IMG_sign.jpg';

const MovieCard = ({ movie }) => {
    return (
        <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noreferrer">
        <div className="card m-3 p-3" style={{ 'width': '20rem' }}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="po"></img>
            <div className="card-body">
                <h5 className="card-title text-primary">{movie.original_title}</h5>
                <h5 className="card-title">{movie.release_date}</h5>
                <h5 className="card-title">{movie.vote_average}</h5>

                <p className="card-text">{movie.overview.slice(0,100)+"..."}</p>
            </div>
        </div>
        </a>
    )
}

export default MovieCard;