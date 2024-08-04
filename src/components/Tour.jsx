// src/components/Tour.jsx
import React, { useEffect, useState } from 'react';
import Cardcomp from './Cardcomp';

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '16px',
  padding: '16px',
};

function Tour() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        const response = await fetch('https://kitsu.io/api/edge/anime');
        const data = await response.json();
        setAnimeList(data.data);
      } catch (error) {
        console.error('Error fetching anime list:', error);
      }
    };

    fetchAnimeList();
  }, []);

  return (
    <div style={gridContainerStyle}>
      {animeList.map(anime => (
        <Cardcomp 
          key={anime.id} 
          id={anime.id} 
          title={anime.attributes.titles.en || anime.attributes.titles.en_jp} 
          image={anime.attributes.posterImage.medium} 
        />
      ))}
    </div>
  );
}

export default Tour;
