// src/components/AnimeDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function AnimeDetails() {
  const { animeId } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await axios.get(`https://kitsu.io/api/edge/anime/${animeId}`);
        setAnime(response.data.data);
      } catch (err) {
        setError('Failed to fetch anime details.');
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeDetails();
  }, [animeId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="anime-details">
      {anime && (
        <>
          <h1>{anime.attributes.canonicalTitle}</h1>
          <img src={anime.attributes.posterImage.large} alt={anime.attributes.canonicalTitle} />
          <p>{anime.attributes.synopsis}</p>
        </>
      )}
    </div>
  );
}
