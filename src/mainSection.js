import currentWeather from './currentWeather';
import forecast from './forecast';
import DOMUtils from './utils/DOMUtils';

const mainSection = (() => {
  const forecastContainer = DOMUtils.createElement(
    'div',
    {
      class: 'forecast-container',
    },
    forecast.daily.domNode,
    forecast.hourly.domNode
  );
  const main = DOMUtils.createElement(
    'main',
    {},
    currentWeather,
    forecastContainer
  );
  return main;
})();

export default mainSection;
