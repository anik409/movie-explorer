import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar.jsx";
import MovieCard from "../components/MovieCard.jsx";
import MovieModal from "../components/MovieModal.jsx";

export default function MoviesPage() {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        // the full list has thousands of shows, so we just keep the first 20
        setShows(data.slice(0, 20));
        setLoading(false);
      })
      .catch(() => {
        setErrorMsg("Something went wrong loading movies.");
        setLoading(false);
      });
  }, []);

  function handleSearch(e) {
    e.preventDefault(); // stop the form from refreshing the page

    if (searchTerm.trim() === "") return;

    setLoading(true);
    setErrorMsg("");

    fetch("https://api.tvmaze.com/search/shows?q=" + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        // search results look like [{ score, show }, { score, show }, ...]
        // so we pull just the "show" part out of each item
        const results = data.map((item) => item.show);
        setShows(results);
        setLoading(false);
      })
      .catch(() => {
        setErrorMsg("Something went wrong searching movies.");
        setLoading(false);
      });
  }

  return (
    <div className="movies-page">
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSubmit={handleSearch}
      />

      {loading && <p className="status-text">Loading movies...</p>}
      {errorMsg && <p className="status-text">{errorMsg}</p>}
      {!loading && !errorMsg && shows.length === 0 && (
        <p className="status-text">No movies found. Try another search.</p>
      )}

      <div className="movie-grid">
        {shows.map((show) => (
          <MovieCard key={show.id} show={show} onSeeDetails={setSelectedShow} />
        ))}
      </div>

      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </div>
  );
}
