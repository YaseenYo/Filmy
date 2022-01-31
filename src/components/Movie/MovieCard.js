import React from "react";
import "./moviecard.css";
import {Link} from "react-router-dom";


const MovieCard = ({movie,genre,availability,setMovieDetail,setGenre,setAvailability}) => {
    const color = availability ? "green" : "red";

    const handleDetail = () => {
        setMovieDetail(movie);
        setAvailability(availability);
        switch (genre) {
            case "Comedy":
                setGenre("1");
                break;
            case "Drama":
                setGenre("2");
                break;
            case "Romance":
                setGenre("3");
                break;
            case "Action":
                setGenre("4");
                break;
            case "Horror":
                setGenre("5");
                break; 
            default :
                setGenre("1");
        }
    };

    return (
        <div className = "ui card moviecard_card">
            <div className ="content moviecard_cardtop">
                <h3 style = {{color : "#3674c1"}}>{movie.title}</h3>
            </div>  
            <div className = "content">
                <img className = "left floated ui tiny image moviecard_image" src = {movie.image} alt = "movie poster"/>                
                <div>
                    <div className = {`ui ${color} tiny label`}>
                        {availability ? "Available" : "Not Available"} 
                    </div>
                    <div className = "description moviecard_description">
                        {movie.description}
                    </div>
                    <div className = "ui blue tiny label">
                        {genre} 
                    </div>
                </div>
            </div>
            <div className = "extra content moviecard_cardbottom">
                <div  style = {{color : "#3674c1"}}>
                    <Link onClick={()=>handleDetail()} to = "moviedetail">
                        <i className = "right floated edit outline icon" style={{cursor:"pointer"}}/>
                    </Link> 
                    Trailer   
                    <i className = "video icon trailericon"/>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;