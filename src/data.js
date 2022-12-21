import THERMOMETER from './icons/weather/thermometer.svg';
import HUMIDITY from './icons/weather/humidity.svg';
import WIND_SPEED from './icons/weather/wind-speed.svg';
import CLOUDINESS from './icons/weather/cloudiness.svg';
import SUNRISE from './icons/weather/sunrise.svg';
import SUNSET from './icons/weather/sunset.svg';
import UV_INDEX from './icons/weather/uv-index.svg';
import VISIBILITY from './icons/weather/visibility.svg';
import RAIN_PROBABILITY from './icons/weather/rain-probability.svg';

function factory(name, icon, varName, unit) {
  return {
    name,
    icon,
    varName,
    unit,
  };
}

const dataSet = {
  temperature: factory('Temperature', THERMOMETER, 'temp', '°C'),
  rainProbability: factory('Rain prob.', RAIN_PROBABILITY, 'pop', '%'),
  feelsLike: factory('Feels like', THERMOMETER, 'feels_like', '°C'),
  windSpeed: factory('Wind speed', WIND_SPEED, 'wind_speed', ' m/s'),
  cloudiness: factory('Cloudiness', CLOUDINESS, 'clouds', '%'),
  humidity: factory('Humidity', HUMIDITY, 'humidity', '%'),
  sunrise: factory('Sunrise', SUNRISE, 'sunrise', ''),
  sunset: factory('Sunset', SUNSET, 'sunset', ''),
  uvIndex: factory('UV index', UV_INDEX, 'uvi', ''),
  visibility: factory('Visibility', VISIBILITY, 'visibility', ' m'),
};

export default dataSet;
