import TemperatureDisplay from './TemperatureDisplay';
import { cloudiness, humidity, rainProbability, uvIndex } from '../../data';
import WeatherCondition from './WeatherCondition';
import DataContainer from '../DataContainer/DataContainer';

export default class HourlyForecastCard extends HTMLLIElement {
  temperatureDisplay: TemperatureDisplay;

  time: HTMLHeadingElement;

  weatherCondition: WeatherCondition;

  dataContainer: DataContainer;

  // TODO fix data type
  constructor(data: any) {
    super();
    this.classList.add('card');

    this.temperatureDisplay = new TemperatureDisplay('unique', data.temp);

    this.time = document.createElement('h3');
    this.time.classList.add('time');
    this.time.textContent = data.dt;

    this.weatherCondition = new WeatherCondition(data.weather[0]);

    const temperature = document.createElement('div');
    temperature.classList.add('temperature');
    temperature.append(this.temperatureDisplay);

    this.dataContainer = new DataContainer(
      [rainProbability, cloudiness, humidity, uvIndex],
      data
    );

    const leftColumn = document.createElement('div');
    leftColumn.append(this.weatherCondition, temperature);

    this.append(this.time, leftColumn, this.dataContainer);
  }
}

customElements.define('hourly-forecast-card', HourlyForecastCard, {
  extends: 'li',
});
