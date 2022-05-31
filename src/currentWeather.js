import dataSet from './data';
import pubSub from './pubSub';
import stringFunctions from './stringFunctions';

const currentWeather = (() => {
  const container = document.createElement('div');
  container.classList.add('current-weather');
  const cityInfo = document.createElement('div');
  cityInfo.classList.add('city-info');
  const cityName = document.createElement('p');
  cityName.classList.add('city-name');
  cityName.textContent = 'City';
  const localDate = document.createElement('p');
  localDate.textContent = '--';
  localDate.classList.add('date');
  cityInfo.append(cityName, localDate);

  const weatherInfo = document.createElement('div');
  weatherInfo.classList.add('weather-info');

  const temperature = document.createElement('p');
  const temperatureValue = document.createElement('span');
  temperatureValue.textContent = '--';
  temperature.classList.add('temperature', 'value');
  const spanSmall = document.createElement('span');
  spanSmall.classList.add('small');
  spanSmall.textContent = '°C';
  temperature.append(temperatureValue, spanSmall);

  const weatherCondition = document.createElement('div');
  weatherCondition.classList.add('weather-condition');
  const weatherIcon = document.createElement('img');
  weatherIcon.src = 'http://openweathermap.org/img/wn/01n@2x.png';
  const weatherDescription = document.createElement('p');
  weatherDescription.textContent = '--';
  weatherCondition.append(weatherIcon, weatherDescription);

  const weatherExtra = document.createElement('div');
  weatherExtra.classList.add('extra');

  const addInfo = (obj) => {
    const div = document.createElement('div');
    div.classList.add('data', obj.varName);
    const value = document.createElement('p');
    value.classList.add('value');
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
    weatherExtra.append(div);
  };

  const dataArr = [
    dataSet.feelsLike,
    dataSet.windSpeed,
    dataSet.cloudiness,
    dataSet.humidity,
    dataSet.visibility,
    dataSet.uvIndex,
  ];

  dataArr.forEach((datum) => {
    addInfo(datum);
  });

  weatherInfo.append(temperature, weatherCondition, weatherExtra);
  container.append(cityInfo, weatherInfo);

  pubSub.subscribe('newData', (data) => {
    cityName.textContent = data.city;
    localDate.textContent = data.current.dt;
    temperatureValue.textContent = Math.round(data.current.temp);
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
    weatherDescription.textContent = stringFunctions.capitalize(data
      .current.weather[0].description);
    dataArr.forEach((datum) => {
      container.querySelector(`.data.${datum.varName} .value`).textContent = data.current[datum.varName] + datum.unit;
    });
  });

  return container;
})();

export default currentWeather;
