import React from 'react';
import Navbar from './Navbar';
import MovieList from './MovieList';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Main = () => {

    return (
        <div className="container" >
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path='/' element={<MovieList type='popular' title='Popular' />}> </Route>
                    <Route path='/top_rated' element={<MovieList type='top_rated' title='Top Rated' />}> </Route>
                    <Route path='/upcoming' element={<MovieList type='upcoming' title='Upcoming' />}> </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )

}
export default Main;