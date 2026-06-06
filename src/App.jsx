import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import { heroMovie, categories } from "./data/movies";
import "./App.css";

const allMovies = categories.flatMap(c => c.movies);

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = searchQuery
    ? allMovies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div className="app">
      <Navbar onSearch={setSearchQuery} />
      {!searchQuery && <Hero movie={heroMovie} />}
      <div className="content">
        {searchQuery ? (
          <SearchResults results={searchResults} query={searchQuery} />
        ) : (
          categories.map(cat => <MovieRow key={cat.id} category={cat} />)
        )}
      </div>
      <Footer />
    </div>
  );
}
