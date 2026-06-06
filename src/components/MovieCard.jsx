import { useState } from "react";

export default function MovieCard({ movie }) {
  const [hovered, setHovered] = useState(false);
  const [inList, setInList] = useState(false);

  return (
    <div
      className={`movie-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={movie.image} alt={movie.title} className="movie-thumb" loading="lazy" />
      <div className="card-overlay">
        <div className="card-top">
          <button className="card-play">▶</button>
          <button className={`card-list ${inList ? "in-list" : ""}`} onClick={e => { e.stopPropagation(); setInList(!inList); }}>
            {inList ? "✓" : "+"}
          </button>
          <button className="card-like">👍</button>
          <button className="card-chevron">⌄</button>
        </div>
        <div className="card-info">
          <p className="card-title">{movie.title}</p>
          <div className="card-meta">
            <span className="card-score">⭐ {movie.rating}</span>
            <span className="card-year">{movie.year}</span>
          </div>
          <div className="card-tags">
            <span className="card-tag">HD</span>
            <span className="card-tag">5.1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
