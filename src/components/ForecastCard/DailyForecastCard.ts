import TemperatureDisplay from './TemperatureDisplay';
import { cloudiness, rainProbability, sunrise, sunset } from '../../data';
import WeatherCondition from './WeatherCondition';
import DataContainer from '../DataContainer/DataContainer';

export default class DailyForecastCard extends HTMLLIElement {
  temperatureDisplays: {
    min: TemperatureDisplay;
    max: TemperatureDisplay;
  };

  time: HTMLHeadingElement;

  weatherCondition: WeatherCondition;

  dataContainer: DataContainer;

  // TODO fix data type
  constructor(data: any) {
    super();
    this.classList.add('card');

    this.temperatureDisplays = {
      min: new TemperatureDisplay('min', data.temp.min),
      max: new TemperatureDisplay('max', data.temp.max),
    };

    this.time = document.createElement('h3');
    this.time.classList.add('time');
    this.time.textContent = data.dt;

    this.weatherCondition = new WeatherCondition(data.weather[0]);

    const temperature = document.createElement('div');
    temperature.classList.add('temperature');
    temperature.append(
      this.temperatureDisplays.min,
      this.temperatureDisplays.max
    );

    const leftColumn = document.createElement('div');
    leftColumn.append(this.weatherCondition, temperature);

    this.dataContainer = new DataContainer(
      [sunrise, sunset, cloudiness, rainProbability],
      data
    );

    this.append(this.time, leftColumn, this.dataContainer);
  }
}

customElements.define('daily-forecast-card', DailyForecastCard, {
  extends: 'li',
});
