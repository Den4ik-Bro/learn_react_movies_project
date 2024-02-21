import React from "react";

import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";


const API_KEY = process.env.REACT_APP_API_KEY;


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      defaultValue: "terminator",
      isLoading: true
    };
  }

  handleSearch = (str, type='all') => {
    this.setState({isLoading: true})
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.Search, isLoading: false });
      })
      .catch((error) => {
        console.error("Movies load error", error);
      });
  };

  componentDidMount() {
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${this.state.defaultValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.Search, isLoading: false });
      })
      .catch((error) => {
        console.error("Movies load error", error);
      });
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <main className="container content">
        <Search handleSearch={this.handleSearch} />
        {isLoading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export { Main };
