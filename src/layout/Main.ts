import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import ForecastContainer from '../components/ForecastContainer/ForecastContainer';

export default class Main extends HTMLElement {
  forecastContainer: ForecastContainer;

  currentWeather: CurrentWeather;

  // TODO fix data type
  constructor(data: any) {
    super();
    this.forecastContainer = new ForecastContainer({
      daily: data.daily,
      hourly: data.hourly,
    });
    this.currentWeather = new CurrentWeather(data.current, data.city);
    this.append(this.currentWeather, this.forecastContainer);
  }

  // generateMainElement() {
  //   const weatherDataContainer = DOMUtils.createElement(
  //     'div',
  //     {
  //       class: 'weather-data-container',
  //     },
  //     this.currentWeather,
  //     this.forecastContainer
  //   );
  //   return DOMUtils.createElement('main', {}, weatherDataContainer);
  // }

  // TODO fix data type
  update(newData: any) {
    this.currentWeather.update(newData.current, newData.city);
    this.forecastContainer.update({
      daily: newData.daily,
      hourly: newData.hourly,
    });
  }
}

customElements.define('main-component', Main, { extends: 'main' });
