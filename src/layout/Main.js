import DOMUtils from '../utils/DOMUtils';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import ForecastContainer from '../components/ForecastContainer/ForecastContainer';

// TODO split view
export default class Main {
  constructor(data) {
    this.forecastContainer = new ForecastContainer({
      daily: data.daily,
      hourly: data.hourly,
    });
    this.currentWeather = new CurrentWeather(data.current, data.city);
    this.element = this.generateMainElement();
  }

  generateMainElement() {
    const weatherDataContainer = DOMUtils.createElement(
      'div',
      {
        class: 'weather-data-container',
      },
      this.currentWeather,
      this.forecastContainer
    );
    return DOMUtils.createElement('main', {}, weatherDataContainer);
  }

  update(newData) {
    this.currentWeather.update(newData.current, newData.city);
    this.forecastContainer.update({
      daily: newData.daily,
      hourly: newData.hourly,
    });
  }
}
