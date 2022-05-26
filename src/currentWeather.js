import FEELS_LIKE from './icons/weather/feels-like.svg';
import HUMIDITY from './icons/weather/humidity.svg';
import WIND_SPEED from './icons/weather/wind-speed.svg';
import CLOUDINESS from './icons/weather/cloudiness.svg';
import SUNRISE from './icons/weather/sunrise.svg';
import SUNSET from './icons/weather/sunset.svg';

function newData(name, icon) {
  const div = document.createElement('div');
  div.classList.add('data');
  const value = document.createElement('p');
  value.textContent = '--';
  const legend = document.createElement('div');
  legend.classList.add('description');
  const desc = document.createElement('p');
  desc.textContent = name;
  const image = document.createElement('img');
  image.setAttribute('alt', name);
  image.src = icon;
  legend.append(image, desc);

  div.append(legend, value);
  return div;
}

const currentWeather = (() => {
  const container = document.createElement('div');
  container.classList.add('current-weather');
  const cityInfo = document.createElement('div');
  cityInfo.classList.add('city-info');
  const cityName = document.createElement('p');
  cityName.classList.add('city-name');
  cityName.textContent = 'London';
  const localDate = document.createElement('p');
  localDate.textContent = 'Wed, 25 May 2022, 19:43';
  cityInfo.append(cityName, localDate);

  const weatherInfo = document.createElement('div');
  weatherInfo.classList.add('weather-info');

  // const temperature = document.createElement('div');
  // temperature.classList.add('temperature');
  // const temperatureIcon = document.createElement('img');
  // temperatureIcon.src = TEMP_ICON;
  const temperatureValue = document.createElement('p');
  temperatureValue.textContent = '21';
  temperatureValue.classList.add('temperature');
  const spanSmall = document.createElement('span');
  spanSmall.classList.add('small');
  spanSmall.textContent = '°C';
  temperatureValue.append(spanSmall);
  // temperature.append(temperatureValue, temperatureUnit);

  const weatherCondition = document.createElement('div');
  weatherCondition.classList.add('weather-condition');
  const weatherIcon = document.createElement('img');
  weatherIcon.src = 'http://openweathermap.org/img/wn/02d@2x.png';
  const weatherDescription = document.createElement('p');
  weatherDescription.textContent = 'Few clouds';
  weatherCondition.append(weatherIcon, weatherDescription);

  const weatherExtra = document.createElement('div');
  weatherExtra.classList.add('extra');
  const feelsLike = newData('Feels like', FEELS_LIKE);
  const windSpeed = newData('Wind speed', WIND_SPEED);
  const cloudiness = newData('Cloudiness', CLOUDINESS);
  const humidity = newData('Wind speed', HUMIDITY);
  const sunrise = newData('Sunrise', SUNRISE);
  const sunset = newData('Sunset', SUNSET);
  weatherExtra.append(sunrise, sunset, feelsLike, humidity, windSpeed, cloudiness);

  weatherInfo.append(temperatureValue, weatherCondition, weatherExtra);

  container.append(cityInfo, weatherInfo);

  return container;
})();

export default currentWeather;
