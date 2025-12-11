import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "Harry Potter", release_date: "2010" },
    { id: 2, title: "The Matrix", release_date: "1998" },
    { id: 3, title: "John Wick", release_date: "2017" },
  ];

  const handleSearch = () => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="search" className="search-input" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
