import THERMOMETER from './icons/weather/thermometer.svg';
import HUMIDITY from './icons/weather/humidity.svg';
import WIND_SPEED from './icons/weather/wind-speed.svg';
import CLOUDINESS from './icons/weather/cloudiness.svg';
import SUNRISE from './icons/weather/sunrise.svg';
import SUNSET from './icons/weather/sunset.svg';
import UV_INDEX from './icons/weather/uv-index.svg';
import VISIBILITY from './icons/weather/visibility.svg';
import RAIN_PROBABILITY from './icons/weather/rain-probability.svg';

type DataType = {
  title: string;
  icon: string;
  varName: string;
  unit: string;
};

export const temperature: DataType = {
  title: 'Temperature',
  icon: THERMOMETER,
  varName: 'temp',
  unit: '°C',
};
export const rainProbability: DataType = {
  title: 'Rain prob.',
  icon: RAIN_PROBABILITY,
  varName: 'pop',
  unit: '%',
};
export const feelsLike: DataType = {
  title: 'Feels like',
  icon: THERMOMETER,
  varName: 'feels_like',
  unit: '°C',
};
export const windSpeed: DataType = {
  title: 'Wind speed',
  icon: WIND_SPEED,
  varName: 'wind_speed',
  unit: ' m/s',
};
export const cloudiness: DataType = {
  title: 'Cloudiness',
  icon: CLOUDINESS,
  varName: 'clouds',
  unit: '%',
};
export const humidity: DataType = {
  title: 'Humidity',
  icon: HUMIDITY,
  varName: 'humidity',
  unit: '%',
};
export const sunrise: DataType = {
  title: 'Sunrise',
  icon: SUNRISE,
  varName: 'sunrise',
  unit: '',
};
export const sunset: DataType = {
  title: 'Sunset',
  icon: SUNSET,
  varName: 'sunset',
  unit: '',
};
export const uvIndex: DataType = {
  title: 'UV index',
  icon: UV_INDEX,
  varName: 'uvi',
  unit: '',
};
export const visibility: DataType = {
  title: 'Visibility',
  icon: VISIBILITY,
  varName: 'visibility',
  unit: ' m',
};
