import pubSub from './pubSub';
import Weather from './Weather';

const API_KEY = 'b8bedc2110030101dd9c8d0c74f2336c';

// TODO error handling
export default class Api {
  static async getLocationData(locationName) {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=1&appid=${API_KEY}`
    );
    const json = await response.json();
    return {
      name: json[0].name,
      country: json[0].country,
      lat: json[0].lat,
      lon: json[0].lon,
    };
  }

  static async getWeatherByCoordinates(location) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    return json;
  }

  static async getWeatherByLocationName(locationName) {
    const locationData = await Api.getLocationData(locationName);
    const weatherData = await Api.getWeatherByCoordinates(locationData);
    weatherData.city = locationData.name;
    weatherData.country = locationData.country;
    const weather = new Weather(weatherData).getNormalizedData();
    pubSub.publish('newData', weather);
  }
}
