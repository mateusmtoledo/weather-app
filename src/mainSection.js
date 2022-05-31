import currentWeather from './currentWeather';
import forecast from './forecast';

const forecastContainer = document.createElement('div');
forecastContainer.classList.add('forecast-container');

const mainSection = (() => {
  const main = document.createElement('main');
  main.append(currentWeather);
  main.append(forecastContainer);
  forecastContainer.append(forecast.daily.domNode, forecast.hourly.domNode);
  return main;
})();

export default mainSection;
