import axios from 'axios'

import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Movies = () => {
  const [moviesData, setmoviesData] = useState([]);
  const [query, setquery] = useState("");

  const searchMovie = async () => {
    //query params.
    const res = await axios.get(
      //"http://www.omdbapi.com/?apikey=9d57be0b&s=avatar"
      "http://www.omdbapi.com/?apikey=635e569a&s=" + query
    );
    console.log(res.data);
    console.log(res.data.Search);
    //searchMovie(res.data.Search)
    setmoviesData(res.data.Search);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Search Movie</h1>
      <input
        type="text"
        onChange={(event) => {
          setquery(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          searchMovie();
        }}
      >
        search
      </button>
      {/* <div class="container mt-4">
          <div class="row">
            <div class="col-md-2">
              {moviesData?.map((movie) => {
                return (
                  <div class="card">
                    <Link to={`/moviedetail/${movie.imdbID}`}>
                      <img src={movie.Poster} class="card-img-top" alt="Image" />
                    </Link>
                    <div class="card-body">
                      <h5 class="card-title">{movie.Title}</h5>
                      <p class="card-text">{movie.Year}</p>
                      <p class="card-text">{movie.imdbID}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}

      <div className="container mt-4">
        <div className="row">
          {moviesData?.map((movie) => {
            return (
              <div key={movie.imdbID} className="col-md-3 mb-4"> {/* Adjust column width as needed */}
                <div className="card">
                  <Link to={`/moviedetail/${movie.imdbID}`}>
                    <img src={movie.Poster} className="card-img-top" alt="Image" />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">{movie.Year}</p>
                    <p className="card-text">{movie.imdbID}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Movies;
