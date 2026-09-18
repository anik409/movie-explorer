import { getYear, getRating, getPosterUrl } from "../utilts/showHelpers.js";

function MovieCard({ show, onSeeDetails }) {
  const poster = getPosterUrl(show);

  return (
    <div className="movie-card">
      {poster ? (
        <img className="poster" src={poster} alt={show.name} />
      ) : (
        <div className="poster-fallback">🎬</div>
      )}
      <div className="movie-card-body">
        <h3>{show.name}</h3>
        <div className="movie-meta">
          ⭐ {getRating(show)} &nbsp;•&nbsp; 📅 {getYear(show)}
        </div>
        <button className="see-details" onClick={() => onSeeDetails(show)}>
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;