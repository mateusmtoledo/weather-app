import DailyForecast from '../Forecast/DailyForecast';
import DOMUtils from '../../utils/DOMUtils';
import HourlyForecast from '../Forecast/HourlyForecast';

export default class ForecastContainer {
  constructor(data) {
    this.dailyForecast = new DailyForecast(data.daily);
    this.hourlyForecast = new HourlyForecast(data.hourly);
    this.active = this.dailyForecast;
    this.element = this.generateForecastContainerElement();
  }

  generateForecastContainerElement() {
    const dailySwitchButton = DOMUtils.createElement(
      'button',
      {
        type: 'button',
        class: 'switch-tab-btn active',
        'data-forecast': 'daily',
      },
      'Daily'
    );

    dailySwitchButton.addEventListener('click', () =>
      this.switchTab(this.dailyForecast)
    );

    const hourlySwitchButton = DOMUtils.createElement(
      'button',
      {
        type: 'button',
        class: 'switch-tab-btn',
        'data-forecast': 'hourly',
      },
      'Hourly'
    );

    hourlySwitchButton.addEventListener('click', () =>
      this.switchTab(this.hourlyForecast)
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
      this.dailyForecast
    );
  }

  switchTab(newTab) {
    if (this.active === newTab) return;
    const forecastType = this.active.dataset.type;
    this.element
      .querySelector(`.switch-tab-btn[data-forecast=${forecastType}`)
      .classList.remove('active');
    const newForecastType = newTab.dataset.type;
    this.element
      .querySelector(`.switch-tab-btn[data-forecast=${newForecastType}`)
      .classList.add('active');
    this.element.removeChild(this.active);
    this.element.append(newTab);
    this.active = newTab;
  }

  update(newData) {
    this.dailyForecast.remove();
    this.hourlyForecast.remove();
    this.dailyForecast = new DailyForecast(newData.daily);
    this.hourlyForecast = new HourlyForecast(newData.hourly);
    this.active = this.dailyForecast;
    this.element.append(this.dailyForecast);
  }
}
