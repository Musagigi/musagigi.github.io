import axios from 'axios';

export const imagesApi = async (data: string[]) => {
  const images = [];

  for (const combo of data) {
    try {
      const response = await axios.get(`/api/robot/${combo}`);
      images.push(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return images;
};
