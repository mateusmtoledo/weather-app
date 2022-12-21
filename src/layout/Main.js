import DOMUtils from '../utils/DOMUtils';
// import DailyForecast from '../components/Forecast/DailyForecast';
import HourlyForecast from '../components/Forecast/HourlyForecast';
import dataSet from '../data';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';

// TODO split view
export default class Main {
  constructor() {
    // this.dailyForecast = new DailyForecast([dataSet.sunrise, dataSet.sunset]);
    this.hourlyForecast = new HourlyForecast([
      dataSet.temperature,
      dataSet.rainProbability,
      dataSet.cloudiness,
      dataSet.humidity,
    ]);
    this.currentWeather = new CurrentWeather();
    this.element = this.generateMainElement();
  }

  generateMainElement() {
    const forecastContainer = DOMUtils.createElement(
      'div',
      {
        class: 'forecast-container',
      },
      // this.dailyForecast.element,
      this.hourlyForecast.element
    );
    const weatherDataContainer = DOMUtils.createElement(
      'div',
      {
        class: 'weather-data-container',
      },
      this.currentWeather.element,
      forecastContainer
    );
    return DOMUtils.createElement('main', {}, weatherDataContainer);
  }
}
