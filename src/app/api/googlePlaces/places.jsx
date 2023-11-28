import { apiPlaces } from '../../../services/axiosAPi';

const placesSearch = async (city, care) => {
  try {
    const response = await apiPlaces.get(
      `/textsearch/json?query=${care}%20in%${city}&key=${process.env.MAPS_KEY}`
    );

    const places = response.data.results.map((place) => {
      return {
        name: place.name,
        position: place.geometry.location,
        rating: place.rating,
        id: place.place_id,
        photo: place.icon,
      };
    });

    return places;
  } catch (error) {
    console.log(error);
  }
};

export default placesSearch;
