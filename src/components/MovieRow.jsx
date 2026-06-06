import { useRef } from "react";
import MovieCard from "./MovieCard";

export default function MovieRow({ category }) {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    const el = rowRef.current;
    el.scrollBy({ left: dir === "left" ? -600 : 600, behavior: "smooth" });
  };

  return (
    <div className="movie-row">
      <h2 className="row-title">{category.title}</h2>
      <div className="row-wrapper">
        <button className="row-arrow left" onClick={() => scroll("left")}>‹</button>
        <div className="row-track" ref={rowRef}>
          {category.movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button className="row-arrow right" onClick={() => scroll("right")}>›</button>
      </div>
    </div>
  );
}
