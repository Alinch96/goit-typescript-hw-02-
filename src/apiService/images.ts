import Axios from 'axios';
import { FetchGalleryPhotosResponse } from '../types/photo';

const ACCESS_KEY: string = '1YqwRSD9TCxQAVman5CaV3MDNhP0VoVOxK1QKZW10Fk';
const axios = Axios.create({
  baseURL: 'https://api.unsplash.com/',
});

axios.defaults.headers.common = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
};
axios.defaults.params = {
  per_page: 12,
  orientation: 'landscape',
};

const fetchImages = async (query:string, page:number): Promise<FetchGalleryPhotosResponse> => {
  const response= await axios.get('search/photos', {
    params: {
      query,
      page,
    },
  });
  const data: FetchGalleryPhotosResponse = response.data;
  return data;
};

export default fetchImages;
