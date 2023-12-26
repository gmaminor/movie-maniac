import React from 'react';
import Navbar from './Navbar';
import MovieList from './MovieList';

const Main = () => {

    return (
        <div className="container" style={{scrollBehavior:'smooth'}}>

            <div>
                <Navbar />
                <MovieList type='popular' title='Popular' />
                <MovieList type='top_rated' title='Top Rated'/>
                <MovieList type='upcoming' title='Upcoming' />
            </div>
        </div>
    )

}
export default Main;