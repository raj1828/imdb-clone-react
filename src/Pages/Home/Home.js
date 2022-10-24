import React, { useEffect, useState } from 'react';
import "./Home.css";

export const Home = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json()) // converting response to json
        .then(data => setPopularMovies(data.results)) //fliterning the data and storing in state i.e. setPopularMovies
    }, [])

  return (
    <div>Home</div>
  )
}
