import Loader from './components/Loader/Loader';
import { RawWeatherData, WeatherAndLocationData } from './data';
import WeatherUtils from './utils/WeatherUtils';

const API_KEY = 'b8bedc2110030101dd9c8d0c74f2336c';

// TODO error handling
export default class Api {
  static async getLocationData(locationName: string) {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=1&appid=${API_KEY}`
    );
    const json: {
      name: string;
      country: string;
      lat: number;
      lon: number;
    }[] = await response.json();
    return {
      name: json[0].name,
      country: json[0].country,
      lat: json[0].lat,
      lon: json[0].lon,
    };
  }

  static async getWeatherByCoordinates(location: { lat: number; lon: number }) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
    );
    const json: RawWeatherData = await response.json();
    return json;
  }

  static async getWeatherByLocationName(locationName: string) {
    const loader = new Loader();
    loader.show();
    const locationData = await Api.getLocationData(locationName);
    const weatherData = await Api.getWeatherByCoordinates(locationData);
    loader.remove();
    const weatherAndLocationData: WeatherAndLocationData = {
      ...weatherData,
      city: locationData.name,
      country: locationData.country,
    };
    weatherAndLocationData.city = locationData.name;
    weatherAndLocationData.country = locationData.country;
    return new WeatherUtils(weatherAndLocationData).getNormalizedData();
  }
}
