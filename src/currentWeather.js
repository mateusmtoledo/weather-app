import dataSet from './data';

function newData(obj) {
  const div = document.createElement('div');
  div.classList.add('data');
  const value = document.createElement('p');
  value.textContent = '--';
  const legend = document.createElement('div');
  legend.classList.add('description');
  const desc = document.createElement('p');
  desc.textContent = obj.name;
  const image = document.createElement('img');
  image.setAttribute('alt', obj.name);
  image.src = obj.icon;
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

  const temperatureValue = document.createElement('p');
  temperatureValue.textContent = '21';
  temperatureValue.classList.add('temperature');
  const spanSmall = document.createElement('span');
  spanSmall.classList.add('small');
  spanSmall.textContent = '°C';
  temperatureValue.append(spanSmall);

  const weatherCondition = document.createElement('div');
  weatherCondition.classList.add('weather-condition');
  const weatherIcon = document.createElement('img');
  weatherIcon.src = 'http://openweathermap.org/img/wn/02d@2x.png';
  const weatherDescription = document.createElement('p');
  weatherDescription.textContent = 'Few clouds';
  weatherCondition.append(weatherIcon, weatherDescription);

  const weatherExtra = document.createElement('div');
  weatherExtra.classList.add('extra');
  const feelsLike = newData(dataSet.feelsLike);
  const windSpeed = newData(dataSet.windSpeed);
  const cloudiness = newData(dataSet.cloudiness);
  const humidity = newData(dataSet.humidity);
  const visibility = newData(dataSet.visibility);
  const uvIndex = newData(dataSet.uvIndex);
  weatherExtra.append(feelsLike, humidity, windSpeed, cloudiness, visibility, uvIndex);

  weatherInfo.append(temperatureValue, weatherCondition, weatherExtra);

  container.append(cityInfo, weatherInfo);

  return container;
})();

export default currentWeather;
