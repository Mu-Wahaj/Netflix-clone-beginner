import MovieCard from "./MovieCard";

export default function SearchResults({ results, query }) {
  if (!query) return null;

  return (
    <div className="search-results">
      <h2 className="row-title">
        {results.length > 0 ? `Results for "${query}"` : `No results for "${query}"`}
      </h2>
      <div className="search-grid">
        {results.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
