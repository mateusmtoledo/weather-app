import DailyForecast from '../Forecast/DailyForecast';
import HourlyForecast from '../Forecast/HourlyForecast';
import {
  sunrise,
  sunset,
  cloudiness,
  rainProbability,
  humidity,
  uvIndex,
} from '../../data';
import DOMUtils from '../../utils/DOMUtils';

export default class ForecastContainer {
  constructor() {
    this.dailyForecast = new DailyForecast([
      sunrise,
      sunset,
      cloudiness,
      rainProbability,
    ]);
    this.hourlyForecast = new HourlyForecast([
      rainProbability,
      cloudiness,
      humidity,
      uvIndex,
    ]);
    this.element = this.generateForecastContainerElement();
  }

  generateForecastContainerElement() {
    const dailySwitchButton = DOMUtils.createElement(
      'button',
      {
        type: 'button',
        class: 'switch-tab-btn',
        'data-forecast': 'daily',
      },
      'Daily'
    );

    dailySwitchButton.addEventListener('click', () =>
      this.switchTab(this.dailyForecast.element)
    );

    const hourlySwitchButton = DOMUtils.createElement(
      'button',
      {
        type: 'button',
        class: 'switch-tab-btn active',
        'data-forecast': 'hourly',
      },
      'Hourly'
    );

    hourlySwitchButton.addEventListener('click', () =>
      this.switchTab(this.hourlyForecast.element)
    );

    const buttonsContainer = DOMUtils.createElement(
      'div',
      {
        class: 'buttons-container',
      },
      dailySwitchButton,
      hourlySwitchButton
    );

    return DOMUtils.createElement(
      'div',
      {
        class: 'forecast-container',
      },
      buttonsContainer,
      this.hourlyForecast.element
    );
  }

  switchTab(newTab) {
    const activeForecast = this.element.querySelector('.forecast');
    if (activeForecast === newTab) return;
    const forecastType = activeForecast.dataset.type;
    this.element
      .querySelector(`.switch-tab-btn[data-forecast=${forecastType}`)
      .classList.remove('active');
    const newForecastType = newTab.dataset.type;
    this.element
      .querySelector(`.switch-tab-btn[data-forecast=${newForecastType}`)
      .classList.add('active');
    this.element.removeChild(activeForecast);
    this.element.append(newTab);
  }
}
