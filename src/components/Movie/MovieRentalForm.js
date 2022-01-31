import React, { useState } from 'react';
import api from "../../api/moviesapi";

const MovieRentalForm = ({movie,genreId}) => {
    const [title, setTitle] = useState(movie ? movie.title : "");
    const [director, setDirector] = useState(movie ? movie.director : "");
    const [rating, setRating] = useState("5");
    const [producer, setProducer] = useState(movie ? movie.producer : "");
    const [writer, setWriter] = useState(movie ? movie.writer : "");
    const [description, setDescription] = useState(movie ? movie.description : "");
    const [releaseDate, setReleaseDate] = useState(movie ? movie.releaseDate.split("T")[0] : "");
    const [imageUrl, setImageUrl] = useState("home.jpg");

    const movieId = movie ? movie.id : "";

    const url = "genres/" + genreId + "/movies?movieId="+ movieId;

    const editMovie = async () => {
        if(title === "" || description === ""|| producer === "" || imageUrl === "" || director === "" || writer === ""){
            alert("Fill all the details...");
            return;
        }

        try {
            await api.patch(url,mydata);
            await alert("Movie Updated Successfully 😱");
            window.location.href = "movies";
          } catch (e) {
            console.log(e);
            alert("Submission  unsuccessfull!!!");
          }
    }

    const mydata = [
        {
          "path": "/title",
          "op": "replace",
          "value": title
        },
        {
            "path": "/producer",
            "op": "replace",
            "value": producer
        },
        {
            "path": "/director",
            "op": "replace",
            "value": director
        },
        {
            "path": "/writer",
            "op": "replace",
            "value": writer
        },
        {
            "path": "/description",
            "op": "replace",
            "value": description
        },
        {
            "path": "/rating",
            "op": "replace",
            "value": rating
        },
        {
            "path": "/image",
            "op": "replace",
            "value": imageUrl
        },
        {
            "path": "/releasedate",
            "op": "replace",
            "value": releaseDate
        },
      ];

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
                    <select onChange={(e)=>{setImageUrl(e.target.value);}} className="ui dropdown">
                        <option value="home.jpg">Home</option>
                        <option value="insideout.jpg">Inside Out</option>
                        <option value="edgeoftomorrow.jpg">Edge Of Tomorrow</option>
                        <option value="batmanvssuperman.jpg">Batman v/s Superman</option>
                        <option value="fantasticfour.jpg">Fantastic 4</option>
                        <option value="antman.jpg">Antman</option>
                        <option value="thelongestride.jpg">The Longest Ride</option>
                        <option value="truedetective.jpg">True Detective</option>
                        <option value="thewalkingdead.jpg">The Walking Dead</option>
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
            <div className ="modal-footer"  style = {{borderTop:0}}>
                    <button type="button" className ="btn btn-sm btn-danger" data-dismiss="modal">Cancel</button>
                    <button onClick={()=>editMovie()} type="button" className ="btn btn-sm btn-primary" data-dismiss="modal">Update</button>
            </div>
            
        </div>
    );
};

export default MovieRentalForm;
