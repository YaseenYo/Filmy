import React, {useState, useEffect} from "react";
import MovieCard from "./MovieCard";
import api from "../../api/moviesapi";

const MoviesList = ({setMovieDetail,setGenre,setAvailability}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        api.get("/movies").then((response) => {
          setMovies(response.data);
        });
      }, []);

    const renderedMovies = movies.map((movie) => {
        return (
            <MovieCard {...movie} key = {movie.movie.id} setMovieDetail = {setMovieDetail} setGenre = {setGenre} setAvailability = {setAvailability}/>
        );
    });

    return (
        <div className = "ui stackable grid" style = {{margin:"auto"}}>
            {renderedMovies}
        </div>
    );
};

export default MoviesList;