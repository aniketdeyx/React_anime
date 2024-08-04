// src/services/kitsuService.js
import axios from 'axios';

const API_BASE_URL = 'https://kitsu.io/api/edge';

export const fetchAnime = async (query, filters = {}) => {
  try {
    const params = {
      'filter[text]': query,
      'page[limit]': 10,
      ...filters,
    };

    const response = await axios.get(`${API_BASE_URL}/anime`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching anime:', error);
    throw error;
  }
};
