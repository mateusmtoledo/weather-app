import HourlyForecastCard from '../ForecastCard/HourlyForecastCard';

export default class HourlyForecast extends HTMLOListElement {
  cards: Array<HourlyForecastCard>;

  // TODO fix data type
  constructor(data: any) {
    super();
    this.classList.add('forecast');
    this.setAttribute('data-type', 'hourly');
    this.cards = data.map((datum: any) => new HourlyForecastCard(datum)); // TODO fix data type
    this.append(...this.cards);
  }
}

customElements.define('hourly-forecast', HourlyForecast, { extends: 'ol' });
