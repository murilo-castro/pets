import { NextResponse } from 'next/server';
import { apiPlaces } from '../../../services/axiosAPi';
import findPlace from './findPlace';
import placesSearch from './places';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  const care = searchParams.get('care');

  console.log(city, care);

  try {
    const placesDetails = [];
    const places = await placesSearch(city, care);
    for (let place of places) {
      const details = await findPlace(place.id);
      placesDetails.push({
        ...place,
        number: details.formatted_phone_number,
        // open: details.opening_hours.weekday_text,
      });
    }

    console.log(placesDetails);

    return NextResponse.json(placesDetails);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Erro interno' });
  }
}
