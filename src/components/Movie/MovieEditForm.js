import React, { useState } from 'react';
import api from "../../api/moviesapi";

const MovieEditForm = ({setImg}) => {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [rating, setRating] = useState("5");
    const [genre, setGenre] = useState("1");
    const [producer, setProducer] = useState("");
    const [writer, setWriter] = useState("");
    const [description, setDescription] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [imageUrl, setImageUrl] = useState("home.jpg");

    const mydata = {
        "title": title,
        "description": description,
        "image": imageUrl,
        "director": director,
        "writer": writer,
        "producer": producer,
        "rating": rating,
        "trailerURI": "trailer link",
        "releaseDate": releaseDate
    };

    const url = "/genres/"+ genre +"/movies";

    const addMovie = async () => {
        if(title === "" || description === ""|| producer === "" || genre === "" || imageUrl === "" || director === "" || writer === ""){
            alert("Fill all the details...");
            return;
        }

        try {
            await api.post(url,mydata);
            alert("Movie Added Successfully 😱");
          } catch (e) {
            console.log(e);
            alert("Submission  unsuccessfull!!!");
          }
    }    
    
    return (
        <div className = "ui form">
            <div className = "fields d-flex">
                <div className = "field flex-grow-1">
                    <label>Movie Title</label>
                    <input onChange={(e)=>setTitle(e.target.value)} value={title} type = "text" placeholder = "Antman"/>
                </div>
                <div className = "field">
                    <label>Rating</label>
                    <select onChange ={(e)=>setRating(e.target.value)} className="ui dropdown">
                        <option value="0">5</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>      
                </div>
                <div className = "field">
                    <label>Genre</label>
                    <select onChange={(e)=>setGenre(e.target.value)} className="ui dropdown">
                        <option value="1">Comedy</option>
                        <option value="2">Drama</option>
                        <option value="3">Romance</option>
                        <option value="4">Action</option>
                        <option value="5">Horror</option>
                    </select>        
                </div>
            </div> 
            <div className = "fields d-flex">
                <div className = "field flex-grow-1">
                    <label>Director</label>
                    <input onChange={(e)=>setDirector(e.target.value)} value={director} type = "text" placeholder = "Ruman"/>
                </div>
                <div className = "field flex-grow-1">
                    <label>Writer</label>
                    <input onChange={(e)=>setWriter(e.target.value)} value={writer} type = "text" placeholder = "Saleha"/>
                </div>
                <div className = "field flex-grow-1">
                    <label>Producer</label>
                    <input onChange={(e)=>setProducer(e.target.value)} value={producer} type = "text" placeholder = "Fazil"/>
                </div> 
            </div> 
            <div className = "fields d-flex">
                <div className = "field flex-grow-1">
                    <label>Release Date</label>
                    <input onChange={(e)=>setReleaseDate(e.target.value)} value={releaseDate} type = "date" placeholder = "12/4/2021"/>
                </div>
                <div className = "field flex-grow-1">
                    <label>Image</label>
                    <select onChange={(e)=>{setImg(e.target.value);setImageUrl(e.target.value);}} className="ui dropdown">
                        <option value="home.jpg">Home</option>
                        <option value="insideout.jpg">Inside Out</option>
                        <option value="edgeoftomorrow.jpg">Edge Of Tomorrow</option>
                        <option value="batmanvssuperman.jpg">Batman v/s Superman</option>
                        <option value="fantasticfour.jpg">Fantastic 4</option>
                        <option value="antman.jpg">Antman</option>
                        <option value="thelongestride.jpg">The Longest Ride</option>
                        <option value="truedetective.jpg">True Detective</option>
                        <option value="thewalkingdead">The Walking Dead</option>
                        <option value="spectre.jpg">Spectre</option>
                        <option value="ted2.jpg">Ted 2</option>
                        <option value="madmax.jpg">Mad max</option>
                        <option value="jurassicworld.jpg">Jurassic World</option>
                    </select>
                </div>
            </div> 
            <div className = "fields d-flex">
                <div className = "field flex-grow-1">
                    <label>Description</label>
                    <textarea onChange={(e)=>setDescription(e.target.value)} value={description} type = "text" placeholder = "say something..." style = {{height:"100px",marginBottom : "10px"}}></textarea>
                </div> 
            </div>
            <div>
                <button onClick={()=>addMovie()} className = "ui right floated tiny button primary" style = {{marginLeft:"7px"}}>Sumit</button>
            </div>
        </div>
    );
};

export default MovieEditForm;
