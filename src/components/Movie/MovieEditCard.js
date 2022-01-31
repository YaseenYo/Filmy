import React, { useState } from 'react';
import MovieEditForm from './MovieEditForm';
import "./movieeditcard.css";

const MovieEditCard = () => {
    const [img, setImg] = useState("edgeoftomorrow.jpg");

    return (
        <div className = "ui card movieeditcard_card">
            <div className ="content movieeditcard_cardtop">
                <h4>Add Movie</h4>
            </div>  
            <div className = "content d-flex flex-wrap" style = {{background : "smokewhite"}}>
                <img className = "ui medium image movieeditcard_image" src = {img} alt = "movie poster"/>                
                <div className = "flex-grow-1 movieeditcard_form">                    
                    <MovieEditForm setImg = {setImg} />
                </div>
            </div>
        </div>
    );
}

export default MovieEditCard;
