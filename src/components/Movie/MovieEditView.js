import React from 'react';
import SidebarNavCombo from '../SidebarNavCombo';
import MovieEditCard from './MovieEditCard';

const MovieEditView = () => {
    return (
        <div>
            <SidebarNavCombo/>
            <MovieEditCard />
        </div>
    );
};

export default MovieEditView;