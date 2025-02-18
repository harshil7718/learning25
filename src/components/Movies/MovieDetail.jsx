// import axios from 'axios'
// import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'

// const MovieDetail = () => {

//     const id= useParams().id
//     const [detail,setdetail]=useState({})

//     const getDetails= async()=>{
//         const response = await axios.get("http://www.omdbapi.com/?apikey=635e569a&i="+id)
//         console.log(response.data);
//         setdetail(response.data)

//     }
//   return (
//     <div style={{textAlign:'center'}}>
//         <h1>Movie Details {id}</h1>
//         <button onClick={()=>{getDetails()}}>detail</button>
//         <h1>COUNTRY {detail?.Country}</h1>
      
//     </div>
//   )
// }

// export default MovieDetail
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// // import "./MovieDetail.css"; // Import the new CSS file


// const MovieDetail = () => {
//   const { id } = useParams();
//   const [detail, setDetail] = useState(null);

//   useEffect(() => {
//     const getDetails = async () => {
//       try {
//         const response = await axios.get(`http://www.omdbapi.com/?apikey=635e569a&i=${id}`);
//         setDetail(response.data);
//       } catch (error) {
//         console.error("Error fetching movie details:", error);
//       }
//     };
//     getDetails();
//   }, [id]);

//   if (!detail) {
//     return <h2 className="loading">Loading...</h2>;
//   }

  

//   return (
//     <div className="movie-detail">
//       {/* Background Poster */}
//       <div className="background-poster" style={{ backgroundImage: `url(${detail.Poster})` }} />

//       <div className="movie-content">
//         {/* Movie Poster */}
//         <img src={detail.Poster} alt={detail.Title} className="movie-poster" />

//         {/* Movie Details */}
//         <div className="movie-info">
//           <h1>{detail.Title} <span>({detail.Year})</span></h1>
//           <p className="genre">{detail.Genre} | {detail.Runtime} | {detail.Released}</p>
          
//           <div className="rating">
//             ⭐ <strong>{detail.imdbRating}</strong> / 10
//           </div>

//           <p className="plot">{detail.Plot}</p>

//           <p><strong>Director:</strong> {detail.Director}</p>
//           <p><strong>Stars:</strong> {detail.Actors}</p>
//           <p><strong>Country:</strong> {detail.Country}</p>

//           <div className="buttons">
//             <button className="watch-trailer">🎬 Watch Trailer</button>
//             <button className="add-watchlist">⭐ Add to Watchlist</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetail;




// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";

// const MovieDetail = () => {
//   const { id } = useParams();
//   const [detail, setDetail] = useState(null);

//   useEffect(() => {
//     const getDetails = async () => {
//       try {
//         const response = await axios.get(`http://www.omdbapi.com/?apikey=635e569a&i=${id}`);
//         setDetail(response.data);
//       } catch (error) {
//         console.error("Error fetching movie details:", error);
//       }
//     };
//     getDetails();
//   }, [id]);

//   if (!detail) {
//     return <LoadingText>Loading...</LoadingText>;
//   }

//   return (
//     <MovieDetailContainer>
//       <BackgroundPoster style={{ backgroundImage: `url(${detail.Poster})` }} />

//       <MovieContent>
//         <MoviePoster src={detail.Poster} alt={detail.Title} />

//         <MovieInfo>
//           <h1>{detail.Title} <span>({detail.Year})</span></h1>
//           <p className="genre">{detail.Genre} | {detail.Runtime} | {detail.Released}</p>
          
//           <Rating>⭐ <strong>{detail.imdbRating}</strong> / 10</Rating>

//           <p className="plot">{detail.Plot}</p>

//           <p><strong>Director:</strong> {detail.Director}</p>
//           <p><strong>Stars:</strong> {detail.Actors}</p>
//           <p><strong>Country:</strong> {detail.Country}</p>

//           <Buttons>
//             <WatchTrailer>🎬 Watch Trailer</WatchTrailer>
//             <AddWatchlist>⭐ Add to Watchlist</AddWatchlist>
//           </Buttons>
//         </MovieInfo>
//       </MovieContent>
//     </MovieDetailContainer>
//   );
// };

// export default MovieDetail;

// /* Styled Components */
// const MovieDetailContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   color: white;
//   background-color: #181818;
//   min-height: 100vh;
//   padding-top: 50px;
// `;

// const BackgroundPoster = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 50vh;
//   background-size: cover;
//   background-position: center;
//   filter: blur(10px);
//   opacity: 0.3;
//   z-index: -1;
// `;

// const MovieContent = styled.div`
//   display: flex;
//   gap: 30px;
//   max-width: 900px;
//   background-color: #222;
//   padding: 30px;
//   border-radius: 10px;
//   box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
// `;

// const MoviePoster = styled.img`
//   width: 250px;
//   border-radius: 10px;
// `;

// const MovieInfo = styled.div`
//   flex: 1;
//   h1 {
//     font-size: 32px;
//     margin-bottom: 10px;
//   }
//   .genre {
//     font-size: 18px;
//     color: #bbb;
//   }
//   .plot {
//     font-size: 16px;
//     color: #ddd;
//     margin-bottom: 15px;
//   }
// `;

// const Rating = styled.div`
//   font-size: 22px;
//   margin: 10px 0;
//   color: gold;
// `;

// const Buttons = styled.div`
//   margin-top: 20px;
// `;

// const WatchTrailer = styled.button`
//   font-size: 16px;
//   padding: 10px 20px;
//   border: none;
//   cursor: pointer;
//   border-radius: 5px;
//   margin-right: 10px;
//   background-color: #e50914;
//   color: white;
// `;

// const AddWatchlist = styled.button`
//   font-size: 16px;
//   padding: 10px 20px;
//   border: none;
//   cursor: pointer;
//   border-radius: 5px;
//   background-color: #444;
//   color: white;
// `;

// const LoadingText = styled.h2`
//   text-align: center;
//   margin-top: 50px;
//   font-size: 24px;
//   color: white;
// `;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=635e569a&i=${id}`);
        setDetail(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    getDetails();

    // Auto-generate bubbles every 3 seconds
    const interval = setInterval(createBubbles, 3000);
    
    return () => clearInterval(interval); // Cleanup
  }, [id]);

  const createBubbles = () => {
    const container = document.querySelector(".bubble-container");
    if (!container) return;

    for (let i = 0; i < 10; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 6 + 3}s`;
      container.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, 8000);
    }
  };

  if (!detail) {
    return <h2 style={styles.loading}>Loading...</h2>;
  }

  return (
    <div style={styles.movieDetail}>
      {/* Stars & Bubbles */}
      <div className="stars"></div>
      <div className="bubble-container"></div>

      {/* Background Blur Poster */}
      <div style={{ ...styles.backgroundPoster, backgroundImage: `url(${detail.Poster})` }} />

      <div style={styles.movieContent}>
        <img src={detail.Poster} alt={detail.Title} style={styles.moviePoster} />

        <div style={styles.movieInfo}>
          <h1>{detail.Title} <span>({detail.Year})</span></h1>
          <p style={styles.genre}>{detail.Genre} | {detail.Runtime} | {detail.Released}</p>

          <div style={styles.rating}>
            ⭐ <strong>{detail.imdbRating}</strong> / 10
          </div>

          <p style={styles.plot}>{detail.Plot}</p>

          <p><strong>Director:</strong> {detail.Director}</p>
          <p><strong>Stars:</strong> {detail.Actors}</p>
          <p><strong>Country:</strong> {detail.Country}</p>

          <div style={styles.buttons}>
            <button style={styles.watchTrailer}>🎬 Watch Trailer</button>
            <button style={styles.addWatchlist}>⭐ Add to Watchlist</button>
          </div>
        </div>
      </div>

      {/* Stars & Bubbles CSS */}
      <style>
        {`
          /* Twinkling Golden Stars */
          .stars {
            position: fixed;
            width: 100%;
            height: 100vh;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 10%, transparent 30%);
            background-size: 400px 400px;
            animation: twinkle 10s infinite alternate;
            z-index: -1;
          }

          @keyframes twinkle {
            0% { opacity: 0.4; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.2); }
          }

          /* Golden Glitter Stars */
          .stars:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://image.shutterstock.com/image-illustration/golden-sparkles-glitter-streaks-texture-260nw-2204284846.jpg') repeat;
            animation: glitter 3s infinite linear;
            z-index: -2;
          }

          @keyframes glitter {
            0% { background-position: 0 0; }
            100% { background-position: 100% 100%; }
          }

          /* Floating Bubbles */
          .bubble-container {
            position: fixed;
            width: 100%;
            height: 100vh;
            pointer-events: none;
            overflow: hidden;
          }

          .bubble {
            position: absolute;
            bottom: -50px;
            width: 15px;
            height: 15px;
            background-color: rgba(255, 215, 0, 0.5); /* Gold color for bubbles */
            border-radius: 50%;
            animation: floatUp ease-in infinite;
            box-shadow: 0px 0px 10px rgba(255, 215, 0, 0.8);
          }

          @keyframes floatUp {
            0% { transform: translateY(0) scale(1); opacity: 0.7; }
            100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default MovieDetail;

/* Styles */
const styles = {
  movieDetail: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
    backgroundColor: "#0a0a0a",
    minHeight: "100vh",
    paddingTop: "50px",
    fontFamily: "'Poppins', sans-serif",
    position: "relative",
    overflow: "hidden",
  },

  backgroundPoster: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "40vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(10px)",
    opacity: 0.15,
    zIndex: -1,
  },

  movieContent: {
    display: "flex",
    gap: "30px",
    maxWidth: "900px",
    backgroundColor: "#1a1a1a",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
    transition: "transform 0.3s ease-in-out",
  },

  moviePoster: {
    width: "250px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(255, 255, 255, 0.2)",
    transition: "transform 0.3s",
  },

  movieInfo: {
    flex: 1,
    textAlign: "left",
  },

  genre: {
    fontSize: "18px",
    color: "#ddd",
    marginBottom: "10px",
    fontWeight: "bold",
  },

  rating: {
    fontSize: "22px",
    margin: "10px 0",
    color: "#ff9800",
    fontWeight: "bold",
  },

  plot: {
    fontSize: "16px",
    color: "#ccc",
    marginBottom: "15px",
    lineHeight: "1.6",
  },

  buttons: {
    marginTop: "20px",
  },

  watchTrailer: {
    fontSize: "16px",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    marginRight: "10px",
    backgroundColor: "#007bff",
    color: "white",
    transition: "0.3s",
  },

  addWatchlist: {
    fontSize: "16px",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    backgroundColor: "#ff5722",
    color: "white",
    transition: "0.3s",
  },

  loading: {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "24px",
    color: "#fff",
  },
};
