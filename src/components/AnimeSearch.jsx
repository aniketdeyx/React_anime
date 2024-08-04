// src/components/AnimeSearch.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAnime } from '../components/KitsuApi';

export default function AnimeSearch() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const filters = {};
    if (category) {
      filters['filter[categories]'] = category;
    }

    try {
      const data = await fetchAnime(query, filters);
      setAnimeList(data.data);
    } catch (err) {
      setError('Failed to fetch anime.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="anime-search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for an anime..."
          className="search-input"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="">All Categories</option>
          <option value="adventure">Adventure</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="fantasy">Fantasy</option>
          <option value="sci-fi">Sci-Fi</option>
          {/* Add more categories as needed */}
        </select>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="anime-list">
        {animeList.map((anime) => (
          <div key={anime.id} className="anime-card">
            <Link to={`/anime/${anime.id}`}>
              <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
              <h3>{anime.attributes.canonicalTitle}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
