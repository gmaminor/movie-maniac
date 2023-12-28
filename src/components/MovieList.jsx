import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import "./MovieList.css";
import Rating from "./Rating";

const MovieList = ({ type,title }) => {

    const [movieData, setMovieData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const [sort, setSort] = useState({
        'by': 'default',
        'order': 'asc'
    });

    useEffect(() => {
        fetchMovies();
    }, [type]);

    const fetchMovies = async () => {
        const result = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=c96d9aaee25fedcf2610ab29771c09ee`);
        const data = await result.json();
        setMovieData(data.results);
        setFilteredData(data.results);

    }
    const handleFilter = (rate) => {

        if (rate === minRating) {
            setMinRating(0);
            rate = 0;
            setFilteredData(movieData);
        } else {
            setMinRating(rate);
            setFilteredData(movieData.filter(movie => movie.vote_average >= rate));
        }

    }
    useEffect(() => {
        if (sort.by !== 'default') {
            handleSort();
        }

    }, [sort, filteredData]);

    const onSorting = e => {
        const { name, value } = e.target;
        setSort((sort) => ({ ...sort, [name]: value }));
    }
    const handleSort = () => {
        const sorted = filteredData.sort((a, b) => {
            if (sort.by === 'release_date') {
                return sort.order === 'asc' ? new Date(b[sort.by]) - new Date(a[sort.by]) :
                    new Date(a[sort.by]) - new Date(b[sort.by]);
            } else {

                return sort.order === 'asc' ? new Date(b[sort.by]) - new Date(a[sort.by]) :
                    new Date(a[sort.by]) - new Date(b[sort.by]);
            };
        });
        setFilteredData(sorted);

    }




    return (
        <div className="bg-dark mt-3 " id={type}  style={{scrollBehavior:'smooth'}}>
            <div className="row">
                    <div className="text-white col-4 "><p className="ms-3">{title}</p></div>
                    <div className="d-flex justify-content-end col-8">
                        <ul className="nav nav-tabs text-decoration">
                            {
                                [8, 7, 6].map(rate => {
                                    return <Rating key={rate} rate={rate} selected={minRating} handleFilter={handleFilter} />
                                })
                            }

                        </ul>
                        <div className="me-3">
                            <select name="by" id="" onChange={onSorting}>
                                <option value="by">SortBy</option>
                                <option value="release_date">Date</option>
                                <option value="vote_average">Rating</option>
                            </select>
                        </div>
                        <div className="me-3">
                            <select name="order" id="" onChange={onSorting}>
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                        </div>
                    </div>
            </div>
            <div className="row">

                {
                    filteredData.map(movie => {
                        return <div className="col-4" key={movie.id}> <MovieCard movie={movie} /></div>
                    })
                }

            </div>
        </div>


    )
}

export default MovieList;