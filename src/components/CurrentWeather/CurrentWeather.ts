import {
  DataType,
  feelsLike,
  windSpeed,
  cloudiness,
  humidity,
  visibility,
  uvIndex,
} from '../../data';
import DataContainer from '../DataContainer/DataContainer';
import TemperatureDisplay from '../ForecastCard/TemperatureDisplay';
import WeatherCondition from '../ForecastCard/WeatherCondition';

export default class CurrentWeather extends HTMLDivElement {
  displayedData: Array<DataType>;

  temperatureDisplay: TemperatureDisplay;

  dataContainer: DataContainer;

  cityName: HTMLHeadingElement;

  localDate: HTMLParagraphElement;

  weatherCondition: WeatherCondition;

  // TODO fix data type
  constructor(data: any, city: string) {
    super();
    this.classList.add('current-weather');
    this.displayedData = [
      feelsLike,
      windSpeed,
      cloudiness,
      humidity,
      visibility,
      uvIndex,
    ];

    this.dataContainer = new DataContainer(this.displayedData, data, true);

    this.weatherCondition = new WeatherCondition(data.weather[0], '96px');

    this.cityName = document.createElement('h2');
    this.cityName.classList.add('city-name');

    this.localDate = document.createElement('p');
    this.localDate.classList.add('date');

    this.temperatureDisplay = new TemperatureDisplay('single', data.temp);

    const cityInfo = document.createElement('div');
    cityInfo.classList.add('city-info');
    cityInfo.append(this.cityName, this.localDate, this.temperatureDisplay);

    this.append(cityInfo, this.weatherCondition, this.dataContainer);

    this.update(data, city);
  }

  // TODO fix data type
  update(newData: any, newCity: string) {
    this.cityName.textContent = newCity;
    this.localDate.textContent = newData.dt;
    this.temperatureDisplay.update(newData.temp);
    this.weatherCondition.update(newData.weather[0]);
    this.dataContainer.update(newData);
  }
}

customElements.define('current-weather', CurrentWeather, { extends: 'div' });
