import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all",
    };
  }

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.handleSearch(this.state.search, this.state.type);
    }
  };

  handleChange = (event) => {
    this.setState({ type: event.target.value }, () => {
      this.props.handleSearch(this.state.search, this.state.type);
    });
  };

  render() {
    return (
      <div className="row">
        <input
          placeholder="search"
          type="search"
          className="validate"
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
          onKeyDown={this.handleKey}
        />
        <button
          className="btn"
          onClick={() =>
            this.props.handleSearch(this.state.search, this.state.type)
          }
        >
          Search
        </button>
        <div className="radio-filter">
          <label>
            <input
              className="with-gap"
              name="movieType"
              type="radio"
              value="all"
              onChange={this.handleChange}
              // checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="movieType"
              type="radio"
              value="movie"
              onChange={this.handleChange}
              // checked={this.state.type === "movie"}
            />
            <span>Movies</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="movieType"
              type="radio"
              value="series"
              onChange={this.handleChange}
              // checked={this.state.type === "series"}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
