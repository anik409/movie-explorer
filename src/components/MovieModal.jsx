import {
  stripHtml,
  getYear,
  getRating,
  getPosterUrl,
} from "../utilts/showHelpers.js";

export default function MovieModal({ show, onClose }) {
  if (!show) return null;

  const poster = getPosterUrl(show);

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <div className="modal-close-row">
          <button onClick={onClose}>✕</button>
        </div>

        {poster ? (
          <img className="modal-backdrop-img" src={poster} alt={show.name} />
        ) : (
          <div className="poster-fallback" style={{ height: "260px" }}>
            🎬
          </div>
        )}

        <div className="modal-body">
          <h2>{show.name}</h2>
          <div className="modal-meta">
            ⭐ Rating: {getRating(show)} &nbsp;|&nbsp; 📅 Release:{" "}
            {getYear(show)}
          </div>

          <p className="overview">{stripHtml(show.summary)}</p>

          {show.genres && show.genres.length > 0 && (
            <div className="modal-genres">
              {show.genres.map((genre) => (
                <span className="genre-tag" key={genre}>
                  {genre}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
