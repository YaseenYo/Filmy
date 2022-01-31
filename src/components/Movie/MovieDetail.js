import React,{useState,useEffect} from 'react';
import MovieRentalForm from './MovieRentalForm';
import Modal from '../Modal';
import "./moviedetail.css";

const MovieDetail = ({movie,genre,availability}) => {
    const [gen, setGen] = useState("Comedy");

    useEffect(() => {
        switch (genre) {
            case "1":
                setGen("Comedy");
                break;
            case "2":
                setGen("Drama");
                break;
            case "3":
                setGen("Romance");
                break;
            case "4":
                setGen("Action");
                break;
            case "5":
                setGen("Horror");
                break;
            default :
                setGen("Comedy");
        }

        if(movie == null){
            alert("No Movie Have been Selected...😱");
            window.location.href = "movies";
        }

      }, [genre,movie]);
    

    const color = availability ? "ui green tiny label" : "ui red tiny label";

    return (
        <div className = "ui card moviedetail_card">
            <div className ="content moviedetail_cardtop">
                <h4>{movie ? movie.title : ""}</h4>
            </div>  
            <div className = "content d-flex flex-wrap" style = {{background : "smokewhite"}}>
                <img className = "ui medium image moviedetail_img" src = {movie ? movie.image : ""} alt = "movie poster"/>                
                <div className = "flex-grow-1 moviedetail_detail">
                    <div className = "ui blue tiny label">
                        {gen}
                    </div>
                    <div className = {color}>
                        {availability ? "Available!" : "Not Available!"} 
                    </div>
                    <div style = {{marginTop:"10px",marginBottom:"5px"}}>
                        <p>Directed by : <b>{movie ? movie.director : ""}</b></p>
                        <p>Written by : <b>{movie ? movie.writer : ""}</b></p>
                        <p>Produced by : <b>{movie ? movie.producer : ""}</b></p>
                    </div>
                    <div className = "description" style = {{marginTop:"10px",marginBottom:"10px",fontSize:"medium"}}>
                       {movie ? movie.description : ""}
                    </div>
                </div>
                
            </div>
            <div className = "extra content" style = {{background : "#f1f6f7"}}>
                <div className = "right floated">
                    <button type = "button" className = "ui tiny button primary" data-toggle="modal" data-target="#myModal" style = {{padding : "7px"}}>Edit Movie</button>
                    <div className ="modal" id="myModal">
                        <Modal title = "Edit Movie">
                            <MovieRentalForm movie = {movie} genreId = {genre}/>
                        </Modal>
                    </div> 
                </div>
                <div  style = {{color : "#3674c1"}}>
                    Trailer   
                    <i className = "video icon" style = {{marginLeft : "3px"}}/>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
