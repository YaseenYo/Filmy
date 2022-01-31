import React from 'react';
import MovieDetail from './MovieDetail';
import SidebarNavCombo from '../SidebarNavCombo';

const MovieDetailsView = ({movie,genre,availability}) => {
    return (
        <div>
            <SidebarNavCombo />
            <MovieDetail movie = {movie} genre = {genre} availability = {availability} />
        </div>
    );
}

export default MovieDetailsView;