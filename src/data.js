import THERMOMETER from './icons/weather/thermometer.svg';
import HUMIDITY from './icons/weather/humidity.svg';
import WIND_SPEED from './icons/weather/wind-speed.svg';
import CLOUDINESS from './icons/weather/cloudiness.svg';
import SUNRISE from './icons/weather/sunrise.svg';
import SUNSET from './icons/weather/sunset.svg';
import UV_INDEX from './icons/weather/uv-index.svg';
import VISIBILITY from './icons/weather/visibility.svg';

function factory(name, icon) {
  return {
    name,
    icon,
  };
}

const dataSet = {
  feelsLike: factory('Feels like', THERMOMETER),
  windSpeed: factory('Wind speed', WIND_SPEED),
  cloudiness: factory('Cloudiness', CLOUDINESS),
  humidity: factory('Humidity', HUMIDITY),
  sunrise: factory('Sunrise', SUNRISE),
  sunset: factory('Sunset', SUNSET),
  uvIndex: factory('UV index', UV_INDEX),
  visibility: factory('Visibility', VISIBILITY),
};

export default dataSet;
