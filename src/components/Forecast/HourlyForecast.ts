import HourlyForecastCard from '../ForecastCard/HourlyForecastCard';

export default class HourlyForecast extends HTMLOListElement {
  cards: Array<HourlyForecastCard>;

  // TODO fix data type
  constructor(data: any) {
    super();
    this.classList.add('forecast');
    this.setAttribute('data-type', 'hourly');
    this.setAttribute('data-name', 'Hourly');
    this.cards = [];
    this.update(data);
  }

  // TODO fix data type
  update(newData: any) {
    this.cards.forEach((card) => card.remove());
    this.cards = newData.map((datum: any) => new HourlyForecastCard(datum)); // TODO fix data type
    this.append(...this.cards);
  }
}

customElements.define('hourly-forecast', HourlyForecast, { extends: 'ol' });
