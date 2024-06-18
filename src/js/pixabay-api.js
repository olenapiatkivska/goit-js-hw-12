// Описаний у документації
import axios from 'axios';

export const fetchImg = async (requestValue, page, perPage) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '44362034-5d7ab655544c2caf430070a80',
      q: requestValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page,
      per_page: perPage,
    },
  });
  return response.data;
};
