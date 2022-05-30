import currentWeather from './currentWeather';
import forecast from './forecast';

const mainSection = (() => {
  const main = document.createElement('main');
  main.append(currentWeather);
  // main.append(forecast.daily.domNode, forecast.hourly.domNode);
  return main;
})();

export default mainSection;
