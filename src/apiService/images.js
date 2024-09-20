import Axios from 'axios';

const ACCESS_KEY = '1YqwRSD9TCxQAVman5CaV3MDNhP0VoVOxK1QKZW10Fk';
const axios = Axios.create({
  baseURL: 'https://api.unsplash.com/',
});

axios.defaults.headers = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
};
axios.defaults.params = {
  per_page: 12,
  orientation: 'landscape',
};

const fetchImages = async (query, page) => {
  const { data } = await axios.get('search/photos', {
    params: {
      query,
      page,
    },
  });

  return data;
};

export default fetchImages;
