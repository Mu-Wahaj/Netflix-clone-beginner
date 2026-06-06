import { useState, useEffect } from "react";

export default function Navbar({ onSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-left">
        <div className="nav-logo">WAHAJFLIX</div>
        <ul className="nav-links">
          <li className="nav-link active">Home</li>
          <li className="nav-link">TV Shows</li>
          <li className="nav-link">Movies</li>
          <li className="nav-link">New & Popular</li>
          <li className="nav-link">My List</li>
        </ul>
      </div>
      <div className="nav-right">
        <div className={`search-box ${searchOpen ? "open" : ""}`}>
          {searchOpen && (
            <input
              autoFocus
              className="search-input"
              placeholder="Titles, people, genres"
              value={searchVal}
              onChange={handleSearch}
            />
          )}
          <button className="icon-btn" onClick={() => { setSearchOpen(!searchOpen); if (searchOpen) { setSearchVal(""); onSearch(""); } }}>
            {searchOpen ? "✕" : "⌕"}
          </button>
        </div>
        <span className="nav-icon">🔔</span>
        <div className="nav-avatar">W</div>
      </div>
    </nav>
  );
}
