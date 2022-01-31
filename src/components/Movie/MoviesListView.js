import React from 'react';
import ChartCard from "../Chart/ChartCard";
import MenuContainer from '../MenuContainer';
import SidebarNavCombo from "../SidebarNavCombo";
import MoviesList from "./MoviesList";
import "./movieslistview.css";

const MoviesListView = ({setMovieDetail,setGenre,setAvailability}) => {
    return (
        <div>
            <SidebarNavCombo/>
            <div className = "d-flex flex-wrap">
                <div className = "movieslistview_container">
                    <MenuContainer title = "Latest Movies Released">
                        <MoviesList setAvailability = {setAvailability} setMovieDetail = {setMovieDetail} setGenre = {setGenre}/>
                    </MenuContainer>   
                </div>
                <div className = "movieslistview_chart">
                    <ChartCard/>
                </div>
            </div>
        </div>
    );
};

export default MoviesListView;
