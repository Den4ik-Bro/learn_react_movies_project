import { Movie } from "./Movie";

function Movies(props) {
  const { movies = []} = props;
  return (
    <div className="movies">
      {movies.length ? 
        movies.map((el) => {return <Movie key={el.imdbID} {...el} />;})
         : <h4>Nothing found</h4>}
    </div>
  );
}

export { Movies };
