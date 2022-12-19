import currentWeather from './currentWeather';
import DOMUtils from './utils/DOMUtils';
import DailyForecast from './components/Forecast/DailyForecast';
import HourlyForecast from './components/Forecast/HourlyForecast';
import dataSet from './data';

const main = (() => {
  const dailyForecast = new DailyForecast([dataSet.sunrise, dataSet.sunset]);
  const hourlyForecast = new HourlyForecast([
    dataSet.temperature,
    dataSet.rainProbability,
    dataSet.cloudiness,
    dataSet.humidity,
  ]);
  const forecastContainer = DOMUtils.createElement(
    'div',
    {
      class: 'forecast-container',
    },
    dailyForecast.domNode,
    hourlyForecast.domNode
  );
  return DOMUtils.createElement('main', {}, currentWeather, forecastContainer);
})(); // TODO class

export default main;
