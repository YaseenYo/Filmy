import React, { useState } from "react";
import {Route,Router} from "react-router-dom";
import CustomersListView from "./customer/CustomersListView";
import history from "../history";
import CustomerRegistrationView from "./customer/CustomerRegistrationView";
import MovieDetailsView from "./Movie/MovieDetailsView";
import MovieEditView from "./Movie/MovieEditView";
import MoviesListView from "./Movie/MoviesListView";

const App = () => {
    const [movieDetail, setMovieDetail] = useState(null);
    const [genre, setGenre] = useState("");
    const [availability, setAvailability] = useState(true);

    return(
        <Router history = {history}>
            <Route path = "/movies" exact component = {() => <MoviesListView setAvailability = {setAvailability} setMovieDetail = {setMovieDetail} setGenre = {setGenre}/>}/>
            <Route path = "/customers" exact component = {CustomersListView}/>
            <Route path = "/customers/register/new" exact component = {CustomerRegistrationView}/>
            <Route path = "/editmovie" exact component = {MovieEditView}/>
            <Route path = "/moviedetail" exact component = {() => <MovieDetailsView movie = {movieDetail} genre = {genre} availability = {availability}/>}/>
        </Router>
    );
};

export default App;