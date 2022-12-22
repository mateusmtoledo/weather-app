import DOMUtils from '../utils/DOMUtils';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import ForecastContainer from '../components/ForecastContainer/ForecastContainer';

// TODO split view
export default class Main {
  constructor() {
    this.forecastContainer = new ForecastContainer();
    this.currentWeather = new CurrentWeather();
    this.element = this.generateMainElement();
  }

  generateMainElement() {
    const weatherDataContainer = DOMUtils.createElement(
      'div',
      {
        class: 'weather-data-container',
      },
      this.currentWeather.element,
      this.forecastContainer.element
    );
    return DOMUtils.createElement('main', {}, weatherDataContainer);
  }
}
