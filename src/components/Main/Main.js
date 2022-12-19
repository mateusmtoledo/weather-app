import currentWeather from '../../currentWeather';
import DOMUtils from '../../utils/DOMUtils';
import DailyForecast from '../Forecast/DailyForecast';
import HourlyForecast from '../Forecast/HourlyForecast';
import dataSet from '../../data';

// TODO split view
export default class Main {
  constructor() {
    this.dailyForecast = new DailyForecast([dataSet.sunrise, dataSet.sunset]);
    this.hourlyForecast = new HourlyForecast([
      dataSet.temperature,
      dataSet.rainProbability,
      dataSet.cloudiness,
      dataSet.humidity,
    ]);
    this.element = this.generateMainElement();
  }

  generateMainElement() {
    const forecastContainer = DOMUtils.createElement(
      'div',
      {
        class: 'forecast-container',
      },
      this.dailyForecast.element,
      this.hourlyForecast.element
    );
    return DOMUtils.createElement(
      'main',
      {},
      currentWeather,
      forecastContainer
    );
  }
}
