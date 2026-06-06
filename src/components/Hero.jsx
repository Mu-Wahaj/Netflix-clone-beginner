import { useState } from "react";

export default function Hero({ movie }) {
  const [inList, setInList] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className="hero" style={{ backgroundImage: `url(${movie.backdrop})` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge">N SERIES</div>
        <h1 className="hero-title">{movie.title}</h1>
        <div className="hero-meta">
          <span className="hero-rating">{movie.rating}</span>
          <span>{movie.year}</span>
          <span>{movie.seasons}</span>
        </div>
        <div className="hero-tags">
          {movie.tags.map(tag => <span key={tag} className="hero-tag">{tag}</span>)}
        </div>
        <p className="hero-desc">{movie.description}</p>
        <div className="hero-btns">
          <button className="btn-play">
            ▶ Play
          </button>
          <button className="btn-more">
            ⓘ More Info
          </button>
          <button className={`btn-icon ${liked ? "active-like" : ""}`} onClick={() => setLiked(!liked)} title="Like">
            👍
          </button>
          <button className={`btn-icon ${inList ? "active-list" : ""}`} onClick={() => setInList(!inList)} title="My List">
            {inList ? "✓" : "+"}
          </button>
        </div>
      </div>
      <div className="hero-bottom-fade" />
    </div>
  );
}
