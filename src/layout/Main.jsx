import React, { useEffect, useState } from "react";

import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (str, type = "all") => {
    console.log(str, type);
    setIsLoading(true);
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Movies load error", error);
      });
  };

  useEffect(() => {
    console.log("useEffect");
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=terminator`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Movies load error", error);
      });
  }, []);

  return (
    <main className="container content">
      <Search handleSearch={handleSearch} />
      {isLoading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};
