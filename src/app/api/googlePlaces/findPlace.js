import { apiPlaces } from '../../../services/axiosAPi';

const findPlace = async (id) => {
  try {
    const details = await apiPlaces.get(
      `/details/json?fields=formatted_phone_number%2Copening_hours/weekday_text&place_id=${id}&key=${process.env.MAPS_KEY}`
    );

    // console.log(details.data.result);

    return details.data.result;
  } catch (error) {
    console.log(error);
  }
};

export default findPlace;
